import { Unsubscribe } from 'redux';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
	ScrollView,
} from 'react-navigation';
import { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icons } from 'react-native-fontawesome';
import React from 'react';
import store from '../../store';
import createHeader from '../overviewScreen/headerIcons';
import { NavigationOptionsWithProps } from '../../aliases';
import { EditCategoryNameAction } from '../../actions/editCategoryName';
import { ActionType } from '../../reducers/actions';
import { AddCategoryAction } from '../../actions/addCategory';
import { EditCategoryIconAction } from '../../actions/editCategoryIcon';
import { Attribute, CategoriesState, EditCategoryState } from '../../state';
import HoardTitlebox from '../hoardTitlebox';
import IconPicker from './iconPicker/iconPicker';
import AttributeEditor from './attributeEditor';
import AttributeCreator from './attributeCreator';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 5,
	},
	attributes: {
		margin: 10,
		padding: 5,
		borderRadius: 5,
	},
});

interface EditCategoryPageState {
	name: string;
	icon: string;
	attributeFields: JSX.Element[];
}
export default class EditCategory extends Component<
	NavigationInjectedProps,
	EditCategoryPageState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions: NavigationOptionsWithProps = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return createHeader('New Category', [
			{
				icon: Icons.check,
				callback: (): void => EditCategory.submitCategory(props),
			},
		]);
	};

	public componentWillMount(): void {
		this.setFields();
		this.unsubscribe = store.subscribe((): void => this.setFields());
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return (
			<ScrollView>
				<View style={styles.row}>
					<HoardTitlebox
						value={this.state.name}
						onChange={(value: string): void =>
							this.setCategoryName(value)
						}
						placeholder="Name"
						width={70}
					/>
					<IconPicker
						onIconSelect={(icon: string): void => {
							const event: EditCategoryIconAction = {
								type: ActionType.EditCategoryIcon,
								icon,
							};
							store.dispatch(event);
						}}
						selectedIcon={this.state.icon}
					/>
				</View>
				<View style={styles.attributes}>
					{this.state.attributeFields}
					<AttributeCreator
						onCreate={(a: Attribute): boolean =>
							this.newAttribute(a)
						}
					/>
				</View>
			</ScrollView>
		);
	}

	private getAttributeField(attribute: Attribute): JSX.Element {
		return (
			<AttributeEditor
				key={attribute.name}
				attribute={attribute}
				onChange={(a: Attribute): void => this.setAttribute(a, false)}
				onDelete={(a: Attribute): void => this.setAttribute(a, true)}
			/>
		);
	}

	private setFields(): void {
		const state = store.getState().editCategory;
		this.setState({
			name: state.name,
			icon: state.category.icon,
			attributeFields: state.category.attributes.map(
				(a: Attribute): JSX.Element => this.getAttributeField(a),
			),
		});
	}

	private setCategoryName(name: string): void {
		const action: EditCategoryNameAction = {
			type: ActionType.EditCategoryName,
			name,
		};
		store.dispatch(action);
	}

	private newAttribute(a: Attribute): boolean {
		const attributeNames = store
			.getState()
			.editCategory.category.attributes.map(
				(a: Attribute): string => {
					return a.name;
				},
			);
		if (a.name === '' || attributeNames.includes(a.name)) {
			return false;
		}
		this.setAttribute(a, false);
		return true;
	}

	private setAttribute(a: Attribute, toDelete: boolean): void {
		store.dispatch({
			type: ActionType.EditCategoryAttribute,
			attribute: a,
			delete: toDelete,
		});
	}

	private static submitCategory(navigator: NavigationInjectedProps): void {
		const state = store.getState();
		const edited = state.editCategory;
		const categories = state.categories;

		if (this.validateCategory(edited, categories)) {
			const action: AddCategoryAction = {
				type: ActionType.AddCategory,
				category: edited.category,
				categoryName: edited.name,
			};
			store.dispatch(action);
			navigator.navigation.goBack();
		}
	}

	private static validateCategory(
		edited: EditCategoryState,
		categories: CategoriesState,
	): boolean {
		if (edited.category.attributes.length === 0) {
			return false;
		} else if (edited.name === '') {
			return false;
		} else if (
			Object.keys(categories).find((c: string) => edited.name === c)
		) {
			return false;
		}
		return true;
	}
}

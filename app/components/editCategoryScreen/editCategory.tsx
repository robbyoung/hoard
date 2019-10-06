import { Unsubscribe } from 'redux';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icons } from 'react-native-fontawesome';
import React from 'react';
import store from '../../store';
import createHeader from '../overviewScreen/headerIcons';
import { NavigationOptionsWithProps } from '../../aliases';
import { EditCategoryNameAction } from '../../actions/editCategoryName';
import { ActionType } from '../../reducers/actions';
import { black, lightColor, white } from '../../styles';
import { AddCategoryAction } from '../../actions/addCategory';
import { EditCategoryIconAction } from '../../actions/editCategoryIcon';
import { Attribute } from '../../state';
import IconPicker from './iconPicker/iconPicker';
import AttributeEditor from './attributeEditor';
import AttributeCreator from './attributeCreator';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 5,
	},
	textField: {
		paddingTop: 1,
		paddingBottom: 1,
		fontSize: 20,
		color: black,
		backgroundColor: white,
		borderRadius: 5,
		marginLeft: 5,
		width: '48%',
	},
	title: {
		width: '70%',
		fontSize: 30,
		textAlign: 'center',
		margin: '5%',
		marginTop: 10,
		marginBottom: 0,
		fontWeight: 'bold',
		color: black,
		backgroundColor: lightColor,
	},
	attributes: {
		margin: 10,
		padding: 5,
		borderRadius: 5,
	},
});

interface EditCategoryState {
	name: string;
	icon: string;
	attributeFields: JSX.Element[];
}
export default class EditCategory extends Component<
	NavigationInjectedProps,
	EditCategoryState
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
			<View>
				<View style={styles.row}>
					<TextInput
						value={this.state.name}
						onChangeText={(value: string): void =>
							this.setCategoryName(value)
						}
						placeholder="Name"
						style={styles.title}
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
						onCreate={(a: Attribute): void => this.setAttribute(a)}
					/>
				</View>
			</View>
		);
	}

	private getAttributeField(attribute: Attribute): JSX.Element {
		return (
			<AttributeEditor
				key={attribute.name}
				attribute={attribute}
				onChange={(a: Attribute): void => this.setAttribute(a)}
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

	private setAttribute(a: Attribute): void {
		store.dispatch({
			type: ActionType.EditCategoryAttribute,
			attribute: a,
		});
	}

	private static submitCategory(navigator: NavigationInjectedProps): void {
		const editState = store.getState().editCategory;
		const action: AddCategoryAction = {
			type: ActionType.AddCategory,
			category: editState.category,
			categoryName: editState.name,
		};
		store.dispatch(action);
		navigator.navigation.goBack();
	}
}

import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Icons } from 'react-native-fontawesome';
import { Unsubscribe } from 'redux';
import store from '../../store';
import { Attribute } from '../../state';
import { ActionType } from '../../reducers/actions';
import { lightColor, darkColor, white, darkWarning, black } from '../../styles';
import createHeader from '../overviewScreen/headerIcons';
import { ValidateEditItemAction } from '../../actions/validateEditAction';
import { EditItemNameAction } from '../../actions/editItemName';
import { AddInventoryAction } from '../../actions/addInventory';
import { NavigationOptionsWithProps } from '../../aliases';
import HoardPicker from '../hoardPicker';
import { EditItemAttributeAction } from '../../actions/editItemAttribute';
import ItemAttributeEditor from './itemAttributeEditor';
const SELECT_CATEGORY_TEXT = 'Pick One';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 5,
	},
	attributes: {
		margin: 10,
		padding: 5,
		borderRadius: 5,
		backgroundColor: lightColor,
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
		width: '90%',
		fontSize: 30,
		textAlign: 'center',
		margin: '5%',
		marginTop: 10,
		marginBottom: 0,
		fontWeight: 'bold',
		color: black,
		backgroundColor: lightColor,
	},
	key: {
		textAlign: 'right',
		fontSize: 22,
		fontWeight: 'bold',
		width: '50%',
		marginRight: 3,
		color: darkColor,
	},
	text: {
		fontSize: 22,
		color: black,
	},
	errorMessage: {
		color: darkWarning,
	},
});

interface EditItemState {
	itemName: string;
	categoryName: string;
	attributeFields: JSX.Element[];
	errorMessage: string;
}
export default class EditItem extends Component<
	NavigationInjectedProps,
	EditItemState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions: NavigationOptionsWithProps = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		const emptyName = store.getState().editItem.name === '';
		const title = emptyName ? 'New Item' : 'Edit Item';
		return createHeader(title, [
			{
				icon: Icons.check,
				callback: async (): Promise<void> => {
					await EditItem.submitItem(props);
				},
			},
		]);
	};

	public state: EditItemState = {
		itemName: '',
		categoryName: SELECT_CATEGORY_TEXT,
		attributeFields: [],
		errorMessage: '',
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe(
			(): void => this.setAttributeFields(),
		);
		this.setAttributeFields();
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return (
			<View>
				<View style={styles.row}>
					<TextInput
						value={this.state.itemName}
						onChangeText={(value: string): void =>
							this.setItemName(value)
						}
						placeholder="Name"
						style={styles.title}
					/>
				</View>
				<View style={styles.attributes}>
					<HoardPicker
						title="Category"
						defaultText="Pick One"
						items={Object.keys(store.getState().categories)}
						selected={this.state.categoryName}
						onSelect={(categoryName: string): void => {
							const category = store.getState().categories[
								categoryName
							];
							const attributes: Attribute[] = category
								? category.attributes
								: [];
							store.dispatch({
								type: ActionType.EditItemCategory,
								categoryName,
								attributes,
							});
						}}
					/>

					{this.state.attributeFields}
				</View>
				<Text style={styles.errorMessage}>
					{this.state.errorMessage}
				</Text>
			</View>
		);
	}

	private setAttributeFields(): void {
		const newState = store.getState().editItem;
		const attributeFields = newState.attributes.map(
			(attribute: Attribute): JSX.Element => {
				return (
					<ItemAttributeEditor
						attribute={attribute}
						onChange={(s: string, a: Attribute): void =>
							this.setAttributeValue(s, a)
						}
						key={attribute.name}
					/>
				);
			},
		);
		this.setState({
			itemName: newState.name,
			categoryName: newState.category,
			attributeFields,
			errorMessage: store.getState().validation,
		});
	}

	private setItemName(name: string): void {
		const setNameAction: EditItemNameAction = {
			type: ActionType.EditItemName,
			name,
		};
		store.dispatch(setNameAction);
	}

	private setAttributeValue(value: string, attribute: Attribute): void {
		const action: EditItemAttributeAction = {
			type: ActionType.EditItemAttribute,
			attribute: {
				name: attribute.name,
				type: attribute.type,
				value,
			},
		};
		store.dispatch(action);
	}

	private static async submitItem(
		navigator: NavigationInjectedProps,
	): Promise<void> {
		const state = store.getState();
		const validateEditAction: ValidateEditItemAction = {
			type: ActionType.ValidateEditItem,
			inventory: state.inventory,
			categories: state.categories,
			editItem: state.editItem,
		};
		await store.dispatch(validateEditAction);

		const errorMessage = store.getState().validation;
		if (errorMessage === '') {
			const addInventoryAction: AddInventoryAction = {
				type: ActionType.AddInventory,
				newItem: store.getState().editItem,
			};
			store.dispatch(addInventoryAction);
			navigator.navigation.goBack();
		}
	}
}

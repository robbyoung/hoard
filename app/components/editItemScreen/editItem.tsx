import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Icons } from 'react-native-fontawesome';
import { Unsubscribe } from 'redux';
import store from '../../store';
import { AttributeType, Attribute } from '../../state';
import { ActionType } from '../../reducers/actions';
import { lightColor, darkColor, white, warning, black } from '../../styles';
import createHeader from '../overviewScreen/headerIcons';
import { ValidateEditItemAction } from '../../actions/validateEditAction';
import { EditItemNameAction } from '../../actions/editItemName';
import { AddInventoryAction } from '../../actions/addInventory';
import { NavigationOptionsWithProps } from '../../aliases';
import BoolAttributeInput from './attributeInputs/boolAttributeInput';
import StringAttributeInput from './attributeInputs/stringAttributeInput';
import CategoryPicker from './categoryPicker';
import NumberAttributeInput from './attributeInputs/numberAttributeInput';

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
	categoryPicker: {
		width: '49%',
		height: 30,
		fontSize: 22,
		marginLeft: 3,
		backgroundColor: white,
	},
	text: {
		fontSize: 22,
		color: black,
	},
	errorMessage: {
		color: warning,
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
					<CategoryPicker chosenCategory={this.state.categoryName} />
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
				switch (attribute.type) {
					case AttributeType.String:
						return (
							<StringAttributeInput
								attribute={attribute}
								key={attribute.name}
							/>
						);
					case AttributeType.Bool:
						return (
							<BoolAttributeInput
								attribute={attribute}
								key={attribute.name}
							/>
						);
					case AttributeType.Number:
						return (
							<NumberAttributeInput
								attribute={attribute}
								key={attribute.name}
							/>
						);
					default:
						throw new Error('Invalid attribute type');
				}
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

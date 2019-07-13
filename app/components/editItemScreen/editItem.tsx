import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Icons } from 'react-native-fontawesome';
import { Unsubscribe } from 'redux';
import store from '../../store';
import { AttributeType } from '../../state';
import { ActionType } from '../../reducers/actions';
import { AddInventoryAction } from '../../reducers/inventory';
import {
	EditItemNameAction,
	ValidateEditAction,
} from '../../reducers/editItem';
import { lightColor, darkColor, white, warning } from '../../styles';
import createHeader from '../overviewScreen/headerIcons';
import BoolAttributeInput from './attributeInputs/boolAttributeInput';
import StringAttributeInput from './attributeInputs/stringAttributeInput';
import CategoryPicker from './categoryPicker';
import NumberAttributeInput from './attributeInputs/numberAttributeInput';

const SELECT_CATEGORY_TEXT = 'Pick One';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 10,
	},
	inputField: {
		width: 200,
		height: 30,
	},
	textField: {
		width: 200,
		backgroundColor: lightColor,
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 22,
	},
	text: {
		fontSize: 22,
	},
	button: {
		width: 80,
		height: 40,
		backgroundColor: darkColor,
		margin: 10,
		alignContent: 'center',
	},
	buttonText: {
		fontSize: 20,
		padding: 10,
		color: white,
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

	public static navigationOptions = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		const emptyName = store.getState().editItem.item.name === '';
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

	public state = {
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
						style={styles.textField}
					/>
				</View>
				<CategoryPicker chosenCategory={this.state.categoryName} />
				{this.state.attributeFields}
				<Text style={styles.errorMessage}>
					{this.state.errorMessage}
				</Text>
			</View>
		);
	}

	private setAttributeFields(): void {
		const newState = store.getState().editItem;
		const newItem = newState.item;
		const attributeFields = newItem.attributes.map(
			(attribute): JSX.Element => {
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
						return <View key="invalid" />;
				}
			},
		);
		this.setState({
			itemName: newItem.name,
			categoryName: newItem.category,
			attributeFields,
			errorMessage: newState.errorMessage,
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
		const validateEditAction: ValidateEditAction = {
			type: ActionType.ValidateEdit,
			inventory: state.inventory,
			categories: state.categories,
		};
		await store.dispatch(validateEditAction);

		const errorMessage = store.getState().editItem.errorMessage;
		if (errorMessage === '') {
			const addInventoryAction: AddInventoryAction = {
				type: ActionType.AddInventory,
				newItem: store.getState().editItem.item,
			};
			store.dispatch(addInventoryAction);
			navigator.navigation.goBack();
		}
	}
}
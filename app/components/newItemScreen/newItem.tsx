import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { Unsubscribe } from 'redux';
import store from '../../store';
import { AttributeType } from '../../state';
import { ActionType } from '../../reducers/actions';
import { AddInventoryAction } from '../../reducers/inventory';
import { SetNewItemNameAction } from '../../reducers/newItem';
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
		backgroundColor: '#eee',
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
		backgroundColor: '#bbb',
		margin: 10,
		alignContent: 'center',
	},
	buttonText: {
		fontSize: 20,
		padding: 10,
		color: '#fff',
	},
});

interface NewItemState {
	itemName: string;
	categoryName: string;
	attributeFields: JSX.Element[];
}
export default class NewItem extends Component<
	NavigationInjectedProps,
	NewItemState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions = {
		title: 'New Item',
	};

	public state = {
		itemName: '',
		categoryName: SELECT_CATEGORY_TEXT,
		attributeFields: [],
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe(
			(): void => this.setAttributeFields(),
		);
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
				<TouchableOpacity
					onPress={(): void => this.submitItem()}
					style={styles.button}>
					<Text style={styles.buttonText}>Submit</Text>
				</TouchableOpacity>
			</View>
		);
	}

	private setAttributeFields(): void {
		const newItem = store.getState().newItem.item;
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
		});
	}

	private setItemName(name: string): void {
		const setNameAction: SetNewItemNameAction = {
			type: ActionType.SetNewItemName,
			name,
		};
		store.dispatch(setNameAction);
	}

	private submitItem(): void {
		const addInventoryAction: AddInventoryAction = {
			type: ActionType.AddInventory,
			newItem: store.getState().newItem.item,
		};
		store.dispatch(addInventoryAction);
		store.dispatch({
			type: ActionType.ResetNewItem,
		});
		this.props.navigation.goBack();
	}
}

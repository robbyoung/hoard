import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text, Button } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../../store';
import StringAttributeInput from './attributeInputs/stringAttributeInput';
import { AttributeType } from '../../state';
import BoolAttributeInput from './attributeInputs/boolAttributeInput';
import { ActionType } from '../../reducers/actions';
import ItemAttribute from '../itemDetailsScreen/itemAttribute';

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
	},
	heading: {
		fontWeight: 'bold',
		fontSize: 22,
	},
	text: {
		fontSize: 22,
	}
});

interface NewItemState {
	categoryName: string;
	attributeFields: JSX.Element[];
}
export default class NewItem extends Component<NavigationInjectedProps, NewItemState> {
	public static navigationOptions = {
		title: 'New Item',
	};

	public state = {
		categoryName: Object.keys(store.getState().categories)[0],
		attributeFields: [],
	};

	public render(): JSX.Element {
		store.subscribe((): void => this.setAttributeFields());
		const categories = store.getState().categories;
		const categoryPickerItems = Object.keys(categories).map((name, i) => (
			<Picker.Item label={name} value={name} key={i}></Picker.Item>
		));
		return (
			<View>
				<View style={styles.row}>
					<Text style={styles.heading}>Category:</Text>
					<Picker style={styles.inputField}
							selectedValue={this.state.categoryName}
							onValueChange={(categoryName) => {
								const attributes = store.getState().categories[categoryName];
								store.dispatch({
									type: ActionType.SetNewItemCategory,
									categoryName,
									attributes,
								});
							}}>
						{categoryPickerItems}
					</Picker>
				</View>
				{this.state.attributeFields}
			</View>
		);
	}

	private setAttributeFields(): void {
		const newItem = store.getState().newItem.item;
		const attributeFields = newItem.attributes.map((attribute): JSX.Element => {
			switch(attribute.type) {
				case AttributeType.String:
					return <StringAttributeInput attribute={attribute} key={attribute.name}/>
				case AttributeType.Bool:
					return <BoolAttributeInput attribute={attribute} key={attribute.name}/>
				default:
					return <View key="invalid"/>
			}
		});
		this.setState({
			categoryName: newItem.category,
			attributeFields,
		});
	}
}

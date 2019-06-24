import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text, Button } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../../store';
import StringAttributeInput from './attributeInputs/stringAttributeInput';
import { AttributeType } from '../../state';
import BoolAttributeInput from './attributeInputs/boolAttributeInput';

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

function setAttributeFields(categoryName: string): JSX.Element[] {
	const category = store.getState().categories[categoryName];
	return category.map((attribute): JSX.Element => {
		switch(attribute.type) {
			case AttributeType.String:
				return <StringAttributeInput attribute={attribute} key={attribute.name}/>
			case AttributeType.Bool:
				return <BoolAttributeInput attribute={attribute} key={attribute.name}/>
			default:
				return <View key="invalid"/>
		}
	});
}

interface NewItemState {
	attributeFields: JSX.Element[];
}
export default class NewItem extends Component<NavigationInjectedProps, NewItemState> {
	public static navigationOptions = {
		title: 'New Item',
	};
	public state = {
		attributeFields: setAttributeFields('Game'),
	};
	public render(): JSX.Element {
		const categories = store.getState().categories;
		const categoryPickerItems = Object.keys(categories).map((name, i) => (
			<Picker.Item label={name} value={name} key={i}></Picker.Item>
		));
		return (
			<View>
				<View style={styles.row}>
					<Text style={styles.heading}>Category:</Text>
					<Picker style={styles.inputField}
							onValueChange={(chosenCategory) => {
								this.setState({
									attributeFields: setAttributeFields(chosenCategory),
								});
							}}>
						{categoryPickerItems}
					</Picker>
				</View>
				{this.state.attributeFields}
			</View>
		);
	}
}

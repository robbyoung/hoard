import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Attribute } from '../../../state';
import { styles } from '../newItem';
import { SetNewItemAttributeAction } from '../../../reducers/newItem';
import { ActionType } from '../../../reducers/actions';
import store from '../../../store';

function setNumberAttributeValue(value: string, attribute: Attribute) {
	const action: SetNewItemAttributeAction = {
		type: ActionType.SetNewItemAttribute,
		attribute: {
			name: attribute.name,
			type: attribute.type,
			value,
		}
	};
	store.dispatch(action);
}

export default class NumberAttributeInput extends Component<{ attribute: Attribute }> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.heading}>{this.props.attribute.name}: </Text>
				<TextInput
					value={this.props.attribute.value}
					onChangeText={(value: string) => setNumberAttributeValue(value, this.props.attribute)}
					keyboardType="numeric"
					style={styles.textField}
				/>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Attribute } from '../../../state';
import { styles } from '../newItem';
import store from '../../../store';
import { ActionType } from '../../../reducers/actions';
import { SetNewItemAttributeAction } from '../../../reducers/newItem';

function setBoolAttributeValue(value: boolean, attribute: Attribute) {
	const action: SetNewItemAttributeAction = {
		type: ActionType.SetNewItemAttribute,
		attribute: {
			name: attribute.name,
			type: attribute.type,
			value: value ? "Y" : "N",
		}
	};
	store.dispatch(action);
}

export default class BoolAttributeInput extends Component<{ attribute: Attribute }> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.heading}>{this.props.attribute.name}: </Text>
				<Switch
					onValueChange={(value: boolean) => setBoolAttributeValue(value, this.props.attribute)}
					value={this.props.attribute.value === "Y"}
				/>
			</View>
		);
	}
}

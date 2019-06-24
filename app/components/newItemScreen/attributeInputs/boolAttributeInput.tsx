import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Attribute } from '../../../state';
import { styles } from '../newItem';

export default class BoolAttributeInput extends Component<{ attribute: Attribute }> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.heading}>{this.props.attribute.name}: </Text>
				<Switch/>
			</View>
		);
	}
}

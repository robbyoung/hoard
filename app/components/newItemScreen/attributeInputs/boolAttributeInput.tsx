import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { Attribute } from '../../../state';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
});

export default class BoolAttributeInput extends Component<{ attribute: Attribute }> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text>{this.props.attribute.name}: </Text>
				<Switch/>
			</View>
		);
	}
}

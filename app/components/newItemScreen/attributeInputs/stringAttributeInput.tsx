import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Attribute } from '../../../state';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
});

export default class StringAttributeInput extends Component<{ attribute: Attribute }> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text>{this.props.attribute.name}: </Text>
				<TextInput></TextInput>
			</View>
		);
	}
}

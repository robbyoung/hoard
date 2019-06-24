import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Attribute } from '../../../state';
import { styles } from '../newItem';

export default class StringAttributeInput extends Component<{ attribute: Attribute }> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.heading}>{this.props.attribute.name}: </Text>
				<TextInput style={styles.textField}></TextInput>
			</View>
		);
	}
}

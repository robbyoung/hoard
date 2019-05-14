import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Attribute } from '../../data/testCategories';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 5,
	},
	key: {
		textAlign: 'right',
		fontSize: 22,
	},
	value: {
		color: "#000000",
		fontSize: 22,
	},
});

interface Props {
	attribute: Attribute
}
export default class ItemAttribute extends Component<Props> {
	public render(): JSX.Element {
		return (
			<View style={styles.container}>
				<Text style={styles.key}>{this.props.attribute.key + ':  '}</Text>
				<Text style={styles.value}>{this.props.attribute.value}</Text>
			</View>
		);
	}
}

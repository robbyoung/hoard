import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Attribute } from '../../state';
import { lightColor } from '../../styles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 5,
		marginBottom: 20,
		backgroundColor: lightColor,
		borderRadius: 10,
	},
});

interface AttributeEditorProps {
	attribute: Attribute;
	onChange: (a: Attribute) => void;
}
export default class AttributeEditor extends Component<AttributeEditorProps> {
	public render(): JSX.Element {
		return (
			<View style={styles.container}>
				<Text>{this.props.attribute.name}</Text>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Attribute } from '../../state';
import { lightColor, black, darkColor } from '../../styles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		marginBottom: 20,
		backgroundColor: lightColor,
		borderRadius: 10,
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
		color: black,
	},
	type: {
		textAlign: 'right',
		fontSize: 22,
		fontWeight: 'bold',
		marginLeft: 10,
		color: darkColor,
	},
	delete: {
		flex: 1,
		flexDirection: 'row-reverse',
	},
	deleteButton: {
		width: 30,
	},
	deleteIcon: {
		color: darkColor,
		fontSize: 25,
	},
});

interface AttributeEditorProps {
	attribute: Attribute;
	onChange: (a: Attribute) => void;
	onDelete: (a: Attribute) => void;
}
export default class AttributeEditor extends Component<AttributeEditorProps> {
	public render(): JSX.Element {
		return (
			<View style={styles.container}>
				<Text style={styles.name}>{this.props.attribute.name}</Text>
				<Text style={styles.type}>{this.props.attribute.type}</Text>
				<View style={styles.delete}>
					<TouchableOpacity
						style={styles.deleteButton}
						onPress={() =>
							this.props.onDelete(this.props.attribute)
						}>
						<FontAwesome style={styles.deleteIcon}>
							{Icons.trash}
						</FontAwesome>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

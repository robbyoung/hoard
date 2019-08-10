import FontAwesome, { Icons } from 'react-native-fontawesome';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Attribute, AttributeType } from '../../state';
import { black, darkColor } from '../../styles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 5,
	},
	key: {
		textAlign: 'right',
		fontSize: 22,
		fontWeight: 'bold',
		width: '50%',
		marginRight: 3,
		color: darkColor,
	},
	value: {
		color: black,
		fontSize: 22,
		width: '50%',
		marginLeft: 3,
		flexWrap: 'wrap',
	},
	valueIcon: {
		color: black,
		fontSize: 22,
		paddingTop: 4,
		width: '50%',
		marginLeft: 3,
	},
});

interface Props {
	attribute: Attribute;
}
export default class ItemAttribute extends Component<Props> {
	public render(): JSX.Element {
		let value: JSX.Element;
		const attr = this.props.attribute;
		if (this.props.attribute.type === AttributeType.Bool) {
			const icon = attr.value === 'True' ? Icons.check : Icons.times;
			value = <FontAwesome style={styles.valueIcon}>{icon}</FontAwesome>;
		} else {
			value = <Text style={styles.value}>{attr.value}</Text>;
		}

		return (
			<View style={styles.container}>
				<Text style={styles.key}>{this.props.attribute.name}</Text>
				{value}
			</View>
		);
	}
}

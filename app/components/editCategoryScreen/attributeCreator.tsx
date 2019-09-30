import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Attribute, AttributeType } from '../../state';
import HoardTextbox from '../hoardTextbox';
import { lightColor, darkColor, white } from '../../styles';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: lightColor,
	},
	textField: {
		width: '85%',
	},
	button: {
		margin: 10,
		padding: 5,
		height: 30,
		width: 30,
		backgroundColor: darkColor,
		borderRadius: 5,
	},
	buttonIcon: {
		fontSize: 22,
		textAlign: 'center',
		color: white,
	}
});

const emptyAttribute: Attribute = {
	name: '',
	type: AttributeType.Bool,
	value: 'T',
};

interface AttributeCreatorProps {
	onCreate: (a: Attribute) => void;
}
export default class AttributeEditor extends Component<
	AttributeCreatorProps,
	Attribute
> {
	public state: Attribute = emptyAttribute;

	public render(): JSX.Element {
		return (
			<View style={styles.container}>
				<View style={styles.textField}>
					<HoardTextbox
						title='Name'
						value={this.state.name}
						onChange={(newValue: string) => {
							this.setState({
								name: newValue,
								type: this.state.type,
								value: this.state.value,
							});
						}}
					/>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.props.onCreate(this.state);
						this.setState(emptyAttribute);
					}}
				>
					<FontAwesome style={styles.buttonIcon}>{Icons.plus}</FontAwesome>
				</TouchableOpacity>
			</View>
		);
	}
}

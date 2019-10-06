import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Attribute, AttributeType } from '../../state';
import HoardTextbox from '../hoardTextbox';
import { lightColor, darkColor, white } from '../../styles';
import HoardPicker from '../hoardPicker';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: lightColor,
		borderRadius: 5,
	},
	fields: {
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
	},
});

const emptyAttribute: Attribute = {
	name: '',
	type: AttributeType.String,
	value: '',
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
				<View style={styles.fields}>
					<HoardTextbox
						title="Name"
						value={this.state.name}
						onChange={(newValue: string): void => {
							this.setState({
								name: newValue,
								type: this.state.type,
								value: this.state.value,
							});
						}}
					/>
					<HoardPicker
						title="Type"
						selected={this.state.type}
						onSelect={(selected: string): void => {
							this.setState({
								name: this.state.name,
								type: selected as AttributeType,
								value: this.state.value,
							});
						}}
						items={Object.values(AttributeType)}
					/>
				</View>
				<TouchableOpacity
					style={styles.button}
					onPress={(): void => {
						this.props.onCreate(this.state);
						this.setState(emptyAttribute);
					}}>
					<FontAwesome style={styles.buttonIcon}>
						{Icons.plus}
					</FontAwesome>
				</TouchableOpacity>
			</View>
		);
	}
}

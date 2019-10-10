import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Attribute, AttributeType } from '../../state';
import HoardTextbox from '../hoardTextbox';
import { lightColor, darkColor, white } from '../../styles';
import HoardPicker from '../hoardPicker';

const styles = StyleSheet.create({
	container: {
		padding: 5,
		backgroundColor: lightColor,
		borderRadius: 10,
	},
	innerContainer: {
		flexDirection: 'row',
	},
	picker: {
		flex: 1,
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
	onCreate: (a: Attribute) => boolean;
}
interface AttributeCreatorState {
	attribute: Attribute;
	error: boolean;
}
export default class AttributeEditor extends Component<
	AttributeCreatorProps,
	AttributeCreatorState
> {
	public state: AttributeCreatorState = {
		attribute: emptyAttribute,
		error: false,
	}

	public render(): JSX.Element {
		return (
			<View style={styles.container}>
				<HoardTextbox
					title="Name"
					value={this.state.attribute.name}
					onChange={(newValue: string): void => {
						this.setState({
							attribute: {
								name: newValue,
								type: this.state.attribute.type,
								value: this.state.attribute.value,
							},
							error: false,
						});
					}}
					error={this.state.error}
				/>
				<View style={styles.innerContainer}>
					<View style={styles.picker}>
						<HoardPicker
							title="Type"
							selected={this.state.attribute.type}
							onSelect={(selected: string): void => {
								this.setState({
									attribute: {
										name: this.state.attribute.name,
										type: selected as AttributeType,
										value: this.state.attribute.value,
									},
									error: this.state.error,
								});
							}}
							items={Object.values(AttributeType)}
						/>
					</View>
					<TouchableOpacity
						style={styles.button}
						onPress={(): void => this.onCreateWrapper()}>
						<FontAwesome style={styles.buttonIcon}>
							{Icons.plus}
						</FontAwesome>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	private onCreateWrapper(): void {
		const success = this.props.onCreate(this.state.attribute);
		if (success) {
			this.setState({
				attribute: emptyAttribute,
				error: false,
			});
		} else {
			this.setState({
				attribute: this.state.attribute,
				error: true,
			});
		}
	}
}

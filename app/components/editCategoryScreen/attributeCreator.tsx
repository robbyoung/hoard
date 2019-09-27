import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Attribute, AttributeType } from '../../state';

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
			<View>
				<TextInput onChangeText={(newValue: string) => {
					this.setState({
						...this.state,
						name: newValue,
					});
				}}/>
				<Button
					title="Add Attribute"
					onPress={() => {
						this.props.onCreate(this.state);
						this.setState(emptyAttribute);
					}}
				/>
			</View>
		);
	}
}

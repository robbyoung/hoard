import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Attribute } from '../../state';

interface AttributeCreatorProps {
	onCreate: (a: Attribute) => void;
}
export default class AttributeEditor extends Component<AttributeCreatorProps, Attribute> {
	public render(): JSX.Element {
		return (
			<View>
				<TextInput
					
				></TextInput>
			</View>
		);
	}
}

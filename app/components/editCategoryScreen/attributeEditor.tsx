import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Attribute } from '../../state';

interface AttributeEditorProps {
	attribute: Attribute;
	onChange: (a: Attribute) => void;
}
export default class AttributeEditor extends Component<AttributeEditorProps> {
	public render(): JSX.Element {
		return (
			<View>
				
			</View>
		);
	}
}

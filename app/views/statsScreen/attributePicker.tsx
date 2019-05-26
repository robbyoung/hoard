import React, { Component } from 'react';
import { Picker } from 'react-native';

interface AttributePickerProps {
	attribute: string,
	onSelect: (attribute: string) => void,
}
export default class AttributePicker extends Component<AttributePickerProps> {
	public render(): JSX.Element {	
		return (
			<Picker selectedValue={this.props.attribute} onValueChange={this.props.onSelect}>
				<Picker.Item label = "Completed" value = "Completed" />
				<Picker.Item label = "Page Count" value = "Page Count" />
				<Picker.Item label = "Series" value = "Series" />
			</Picker>
		);
	}
}

import React, { Component } from 'react';
import { Picker } from 'react-native';

interface AttributePickerProps {
	selected: string,
	attributeList: string[],
	onSelect: (attribute: string) => void,
}
export default class AttributePicker extends Component<AttributePickerProps> {
	public render(): JSX.Element {
		const attributes = this.props.attributeList.map((attr: string) => (
			<Picker.Item label={attr} value={attr} key={attr}/>
		));
		return (
			<Picker selectedValue={this.props.selected} onValueChange={this.props.onSelect}>
				{attributes}
			</Picker>
		);
	}
}

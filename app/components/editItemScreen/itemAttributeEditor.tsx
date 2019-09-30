import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Attribute, AttributeType } from '../../state';
import HoardTextbox from '../hoardTextbox';
import { white, darkColor } from '../../styles';
import { styles } from './editItem';

interface ItemAttributeEditorProps {
	attribute: Attribute;
	onChange: (s: string, a: Attribute) => void;
}
export default class ItemAttributeEditor extends Component<
	ItemAttributeEditorProps
> {
	public render(): JSX.Element {
		switch (this.props.attribute.type) {
			case AttributeType.String:
				return (
					<HoardTextbox
						title={this.props.attribute.name}
						value={this.props.attribute.value}
						onChange={(s: string): void =>
							this.props.onChange(s, this.props.attribute)
						}
					/>
				);

			case AttributeType.Number:
				return (
					<HoardTextbox
						title={this.props.attribute.name}
						value={this.props.attribute.value}
						numeric={true}
						onChange={(s: string): void =>
							this.props.onChange(s, this.props.attribute)
						}
					/>
				);

			case AttributeType.Bool:
				return (
					<View style={styles.row}>
						<Text style={styles.key}>
							{this.props.attribute.name}
						</Text>
						<Switch
							thumbColor={white}
							trackColor={{ true: darkColor, false: '#ccc' }}
							onValueChange={(b: boolean): void => {
								const s = b ? 'True' : 'False';
								this.props.onChange(s, this.props.attribute);
							}}
							value={this.props.attribute.value === 'True'}
						/>
					</View>
				);

			default:
				throw new Error(
					`Invalid attribute type '${this.props.attribute.type}'`,
				);
		}
	}
}

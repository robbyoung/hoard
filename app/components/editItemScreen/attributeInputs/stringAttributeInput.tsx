import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Attribute } from '../../../state';
import { styles } from '../editItem';
import { EditItemAttributeAction } from '../../../reducers/editItem';
import { ActionType } from '../../../reducers/actions';
import store from '../../../store';

function setStringAttributeValue(value: string, attribute: Attribute): void {
	const action: EditItemAttributeAction = {
		type: ActionType.EditItemAttribute,
		attribute: {
			name: attribute.name,
			type: attribute.type,
			value,
		},
	};
	store.dispatch(action);
}

export default class StringAttributeInput extends Component<{
	attribute: Attribute;
}> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.heading}>
					{this.props.attribute.name}:{' '}
				</Text>
				<TextInput
					value={this.props.attribute.value}
					onChangeText={(value: string): void =>
						setStringAttributeValue(value, this.props.attribute)
					}
					style={styles.textField}
				/>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import { Attribute } from '../../../state';
import { styles } from '../editItem';
import store from '../../../store';
import { ActionType } from '../../../reducers/actions';
import { EditItemAttributeAction } from '../../../reducers/editItem';
import { darkColor, white } from '../../../styles';

function setBoolAttributeValue(value: boolean, attribute: Attribute): void {
	const action: EditItemAttributeAction = {
		type: ActionType.EditItemAttribute,
		attribute: {
			name: attribute.name,
			type: attribute.type,
			value: value ? 'T' : 'F',
		},
	};
	store.dispatch(action);
}

export default class BoolAttributeInput extends Component<{
	attribute: Attribute;
}> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.key}>{this.props.attribute.name}</Text>
				<Switch
					thumbColor={white}
					trackColor={{ true: darkColor, false: '#ccc' }}
					onValueChange={(value: boolean): void =>
						setBoolAttributeValue(value, this.props.attribute)
					}
					value={this.props.attribute.value === 'T'}
				/>
			</View>
		);
	}
}

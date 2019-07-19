import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState, Attribute } from '../../state';

export interface EditItemAttributeAction extends Action {
	attribute: Attribute;
}

export function setAttribute(
	oldState: EditItemState,
	action: EditItemAttributeAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	const match = newState.item.attributes.find(
		(attr): boolean => attr.name === action.attribute.name,
	);
	if (match) {
		match.value = action.attribute.value;
	}
	newState.errorMessage = '';
	return newState;
}

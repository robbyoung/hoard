import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState, Attribute } from '../../state';

export interface EditItemAttributeAction extends Action {
	attribute: Attribute;
}

export function editItemAttribute(
	oldState: EditItemState,
	action: EditItemAttributeAction,
): EditItemState {
	const newState: EditItemState = {
		item: cloneDeep(oldState.item),
		errorMessage: '',
	};

	const matchIndex = newState.item.attributes.findIndex(
		(attr): boolean => attr.name === action.attribute.name,
	);
	newState.item.attributes[matchIndex] = action.attribute;
	return newState;
}

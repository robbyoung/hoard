import { Action } from 'redux';
import { EditItemState, Attribute } from '../../state';

export interface EditItemAttributeAction extends Action {
	attribute: Attribute;
}

export function editItemAttribute(
	oldState: EditItemState,
	action: EditItemAttributeAction,
): EditItemState {
	const newState: EditItemState = {
		name: oldState.name,
		id: oldState.id,
		category: oldState.category,
		attributes: [...oldState.attributes],
	};

	const matchIndex = newState.attributes.findIndex(
		(attr): boolean => attr.name === action.attribute.name,
	);
	newState.attributes[matchIndex] = action.attribute;
	return newState;
}

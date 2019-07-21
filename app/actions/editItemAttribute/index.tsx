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
		item: {
			name: oldState.item.name,
			id: oldState.item.id,
			category: oldState.item.category,
			attributes: [...oldState.item.attributes],
		},
		errorMessage: '',
	};

	const matchIndex = newState.item.attributes.findIndex(
		(attr): boolean => attr.name === action.attribute.name,
	);
	newState.item.attributes[matchIndex] = action.attribute;
	return newState;
}

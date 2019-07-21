import { Action } from 'redux';
import { EditItemState, Attribute } from '../../state';

export interface EditItemCategoryAction extends Action {
	categoryName: string;
	attributes: Attribute[];
}

export function editItemCategory(
	oldState: EditItemState,
	action: EditItemCategoryAction,
): EditItemState {
	const newState: EditItemState = {
		item: {
			name: oldState.item.name,
			id: oldState.item.id,
			category: action.categoryName,
			attributes: action.attributes,
		},
		errorMessage: '',
	};
	return newState;
}

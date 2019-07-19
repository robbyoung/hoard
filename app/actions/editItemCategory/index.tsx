import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState, Attribute } from '../../state';

export interface EditItemCategoryAction extends Action {
	categoryName: string;
	attributes: Attribute[];
}

export function setCategory(
	oldState: EditItemState,
	action: EditItemCategoryAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	newState.item.category = action.categoryName;
	newState.item.attributes = cloneDeep(action.attributes);
	newState.errorMessage = '';
	return newState;
}

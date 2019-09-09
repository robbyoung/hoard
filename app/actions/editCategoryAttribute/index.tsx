import { Action } from 'redux';
import { EditCategoryState } from '../../state';

export interface EditCategoryAttributeAction extends Action {
	name: string;
}

export function editCategoryAttribute(
	oldState: EditCategoryState,
	action: EditCategoryAttributeAction,
): EditCategoryState {
	return oldState;
}

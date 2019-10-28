import { Action } from 'redux';
import { EditCategoryState } from '../../state';

export interface EditCategoryNameAction extends Action {
	name: string;
}

export function editCategoryName(
	oldState: EditCategoryState,
	action: EditCategoryNameAction,
): EditCategoryState {
	return {
		...oldState,
		name: action.name,
	};
}

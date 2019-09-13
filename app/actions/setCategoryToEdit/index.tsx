import { Action } from 'redux';
import { EditCategoryState, Category } from '../../state';

export interface SetCategoryToEditAction extends Action {
	name: string;
	category?: Category;
}

export function setCategoryToEdit(
	oldState: EditCategoryState,
	action: SetCategoryToEditAction,
): EditCategoryState {
	if (action.category === undefined) {
		return {
			name: '',
			category: {
				icon: '',
				attributes: [],
			},
		};
	} else {
		return {
			name: action.name,
			category: action.category,
		};
	}
}

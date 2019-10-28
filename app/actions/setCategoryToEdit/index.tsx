import { Action } from 'redux';
import { EditCategoryState, Category } from '../../state';
import { getRandomIcon } from '../../components/editCategoryScreen/iconPicker/availableIcons';

export interface SetCategoryToEditAction extends Action {
	name?: string;
	category?: Category;
}

export function setCategoryToEdit(
	oldState: EditCategoryState,
	action: SetCategoryToEditAction,
): EditCategoryState {
	if (action.category === undefined || action.name === undefined) {
		return {
			name: '',
			category: {
				icon: getRandomIcon(),
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

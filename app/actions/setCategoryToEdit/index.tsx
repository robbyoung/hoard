import { Action } from 'redux';
import uuid from 'uuid';
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
				id: uuid.v4(),
			},
		};
	} else {
		return {
			name: action.name,
			category: action.category,
		};
	}
}

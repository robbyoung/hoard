import { Action } from 'redux';
import { Category, CategoriesState } from '../../state';

export interface AddCategoryAction extends Action {
	category: Category;
	categoryName: string;
}

export function addCategory(
	oldState: CategoriesState,
	action: AddCategoryAction,
): CategoriesState {
	const newState = {
		...oldState,
	};
	newState[action.categoryName] = action.category;
	return newState;
}

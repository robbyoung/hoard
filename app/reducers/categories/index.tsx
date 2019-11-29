import { Action } from 'redux';
import { CategoriesState } from '../../state';
import { ActionType } from '../actions';
import { addCategory, AddCategoryAction } from '../../actions/addCategory';

export interface LoadCategoriesAction extends Action {
	state: CategoriesState;
}

export default function categoriesReducer(
	state: CategoriesState = {},
	action: Action,
): CategoriesState {
	switch (action.type) {
		case ActionType.LoadCategories:
			return (action as LoadCategoriesAction).state;
		case ActionType.AddCategory:
			return addCategory(state, action as AddCategoryAction);
		default:
			return state;
	}
}

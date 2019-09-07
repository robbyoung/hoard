import { Action } from 'redux';
import { CategoriesState } from '../../state';
import { ActionType } from '../actions';
import { addCategory, AddCategoryAction } from '../../actions/addCategory';
import testCategories from './testCategories';

const defaultCategories = testCategories;

export default function categoriesReducer(
	state: CategoriesState = defaultCategories,
	action: Action,
): CategoriesState {
	switch (action.type) {
		case ActionType.AddCategory:
			return addCategory(state, action as AddCategoryAction);
		default:
			return state;
	}
}

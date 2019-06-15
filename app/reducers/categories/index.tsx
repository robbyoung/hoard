import { Action } from 'redux';
import { CategoriesState } from '../../state';
import { cloneDeep } from 'lodash';
import { ActionType } from '../actions';

const defaultCategories: CategoriesState = {
	categories: [],
};

export default function categoriesReducer(
	state: CategoriesState = defaultCategories,
	action: Action,
): CategoriesState {
	switch (action.type) {
		case ActionType.AddCategory:
		case ActionType.RemoveCategory:
		default:
			return cloneDeep(state);
	}
}

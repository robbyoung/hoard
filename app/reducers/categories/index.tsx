import { Action } from 'redux';
import { CategoriesState } from '../../state';
import testCategories from './testCategories';

const defaultCategories = testCategories;

export default function categoriesReducer(
	state: CategoriesState = defaultCategories,
	action: Action,
): CategoriesState {
	switch (action.type) {
		default:
			return state;
	}
}

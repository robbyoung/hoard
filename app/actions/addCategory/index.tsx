import { Action } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
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

	AsyncStorage.setItem('categories', JSON.stringify(newState)).catch(
		(error: Error): void => {
			console.error(
				'Something went wrong while saving categories: ' + error,
			);
		},
	);
	return newState;
}

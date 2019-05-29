import { Action } from "redux";
import { CategoriesState } from "../../state";

const defaultCategories: CategoriesState = {};

export default function categoriesReducer(state: CategoriesState = defaultCategories, action: Action): CategoriesState {
	return state;
}
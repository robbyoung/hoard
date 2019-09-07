import { CategoriesState } from '../../state';
import { ActionType } from '../../reducers/actions';
import * as testStates from './testStates';
import { AddCategoryAction, addCategory } from '.';

describe('Add Inventory Action', (): void => {
	let state: CategoriesState;
	let action: AddCategoryAction;

	beforeEach(
		(): void => {
			state = testStates.createCategories(5);
			action = {
				type: ActionType.AddCategory,
				category: testStates.alteredCategory,
				categoryName: '6',
			};
		},
	);

	it('can add a new category', (): void => {
		const newState = addCategory(state, action);
		expect(newState).toEqual({
			...testStates.createCategories(5),
			'6': testStates.alteredCategory,
		});
		expect(state).toEqual(testStates.createCategories(5));
	});

	it('can update an existing category', (): void => {
		action.categoryName = '5';
		const newState = addCategory(state, action);
		expect(newState).toEqual({
			...testStates.createCategories(5),
			'5': testStates.alteredCategory,
		});
		expect(state).toEqual(testStates.createCategories(5));
	});
});

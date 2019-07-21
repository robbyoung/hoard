import { ActionType } from '../../reducers/actions';
import { createTestState, testCategories } from './testStates';
import { EditItemCategoryAction, editItemCategory } from '.';

function runTest(oldCategory: string, newCategory: string): void {
	const state = createTestState(oldCategory);
	const action: EditItemCategoryAction = {
		type: ActionType.EditItemAttribute,
		attributes: testCategories[newCategory].attributes,
		categoryName: newCategory,
	};

	const newState = editItemCategory(state, action);
	expect(newState).toEqual(createTestState(newCategory));
	expect(state).toEqual(createTestState(oldCategory));
}

describe('Edit Item Category', (): void => {
	it('can update to a category with one attribute', (): void => {
		runTest('noAttributes', 'oneAttribute');
	});

	it('can update to a category with multiple attributes', (): void => {
		runTest('noAttributes', 'twoAttributes');
	});

	it('can update to a category with no attributes', (): void => {
		runTest('oneAttribute', 'noAttributes');
	});
});

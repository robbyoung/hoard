import { ActionType } from '../../reducers/actions';
import { EditItemState, ValidationState } from '../../state';
import { createTestItem, testCategories, testInventory } from './testStates';
import { ValidateEditItemAction, validateEditItem, EditItemErrors } from '.';

function runTest(
	newInventory: EditItemState,
	expectedState: ValidationState,
): void {
	const state = '';
	const action: ValidateEditItemAction = {
		type: ActionType.EditItemAttribute,
		categories: testCategories,
		inventory: testInventory,
		editItem: newInventory,
	};

	const newState = validateEditItem(state, action);
	expect(newState).toEqual(expectedState);
	expect(state).toEqual('');
}

describe('Validate Edit Item', (): void => {
	it('will pass a valid new item', (): void => {
		runTest(createTestItem('Pineapple', 'category', false), '');
	});

	it('will pass an edit item with an unedited name', (): void => {
		runTest(createTestItem('Lemon', 'category', false), '');
	});

	it('will fail a new item with a duplicate name', (): void => {
		runTest(
			createTestItem('Lemon', 'category', true),
			EditItemErrors.DuplicateName,
		);
	});

	it('will fail an item with a nonexistent category', (): void => {
		runTest(
			createTestItem('Pineapple', 'invalid', false),
			EditItemErrors.InvalidCategory,
		);
	});

	it('will fail an item with an empty name', (): void => {
		runTest(
			createTestItem('', 'category', false),
			EditItemErrors.InvalidName,
		);
	});
});

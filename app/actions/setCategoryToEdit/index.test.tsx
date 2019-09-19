import { ActionType } from '../../reducers/actions';
import { EditCategoryState } from '../../state';
import { defaultState } from '../../reducers/editCategory';
import { createTestState } from './testStates';
import { SetCategoryToEditAction, setCategoryToEdit } from '.';

function runTest(
	oldState: EditCategoryState,
	newCategory?: EditCategoryState,
): void {
	const state =
		oldState.name == '' ? defaultState : createTestState(oldState.name);
	const action: SetCategoryToEditAction = {
		type: ActionType.EditItemAttribute,
		category: newCategory ? newCategory.category : undefined,
		name: newCategory ? newCategory.name : undefined,
	};

	const newState = setCategoryToEdit(state, action);
	expect(newState).toEqual(newCategory ? newCategory : defaultState);
	expect(state).toEqual(oldState);
}

describe('Set Category to Edit', (): void => {
	it('can reset the state to default', (): void => {
		runTest(createTestState('a'), undefined);
	});

	it('can set the state to an existing category from default', (): void => {
		runTest(defaultState, createTestState('b'));
	});

	it('can switch out existing categories', (): void => {
		runTest(createTestState('c'), createTestState('d'));
	});
});

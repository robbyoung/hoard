import { EditCategoryState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { createTestState } from './testStates';
import { EditCategoryNameAction, editCategoryName } from '.';

describe('Edit Category Name', (): void => {
	let state: EditCategoryState;
	const action: EditCategoryNameAction = {
		type: ActionType.EditCategoryName,
		name: '',
	};

	it('can update a category name', (): void => {
		state = createTestState('Old Name');
		action.name = 'New Name';

		const newState = editCategoryName(state, action);
		expect(newState).toEqual(createTestState('New Name'));
		expect(state).toEqual(createTestState('Old Name'));
	});
});

import { EditCategoryState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { createTestState } from './testStates';
import { EditCategoryIconAction, editCategoryIcon } from '.';

describe('Edit Category Icon', (): void => {
	let state: EditCategoryState;
	const action: EditCategoryIconAction = {
		type: ActionType.EditCategoryIcon,
		icon: '',
	};

	it('can update a category icon', (): void => {
		state = createTestState('Old Icon');
		action.icon = 'New Icon';

		const newState = editCategoryIcon(state, action);
		expect(newState).toEqual(createTestState('New Icon'));
		expect(state).toEqual(createTestState('Old Icon'));
	});
});

import { EditItemState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { createTestItem } from './testStates';
import { EditItemNameAction, editItemName } from '.';

describe('Edit Item Name', (): void => {
	let state: EditItemState;
	let action: EditItemNameAction = {
		type: ActionType.EditItemName,
		name: '',
	};

	it('can update an item name', (): void => {
		state = createTestItem('Old Name');
		action.name = 'New Name';

		const newState = editItemName(state, action);
		expect(newState).toEqual(createTestItem('New Name'));
		expect(state).toEqual(createTestItem('Old Name'));
	});
});

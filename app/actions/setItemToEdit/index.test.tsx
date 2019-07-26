import { ActionType } from '../../reducers/actions';
import { EditItemState } from '../../state';
import { defaultState } from '../../reducers/editItem';
import { createTestState } from './testStates';
import { SetItemToEditAction, setItemToEdit } from '.';

function runTest(oldState: EditItemState, newItem?: EditItemState): void {
	const state =
		oldState.id == '' ? defaultState : createTestState(oldState.id);
	const action: SetItemToEditAction = {
		type: ActionType.EditItemAttribute,
		newItem,
	};

	const newState = setItemToEdit(state, action);
	expect(newState).toEqual(newItem ? newItem : defaultState);
	expect(state).toEqual(oldState);
}

describe('Set Item to Edit', (): void => {
	it('can reset the state to default', (): void => {
		runTest(createTestState('a'), undefined);
	});

	it('can set the state to an existing item from default', (): void => {
		runTest(defaultState, createTestState('b'));
	});

	it('can switch out existing items', (): void => {
		runTest(createTestState('c'), createTestState('d'));
	});
});

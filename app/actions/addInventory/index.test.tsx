import { InventoryState } from '../../state';
import { AddInventoryAction, addInventory } from '../../actions/addInventory';
import { ActionType } from '../../reducers/actions';
import { JestMock } from '../../aliases';
import * as testStates from './testStates';

jest.mock(
	'@react-native-community/async-storage',
	(): JestMock => {
		return {
			setItem: async (): Promise<void> => undefined,
		};
	},
);

describe('Add Inventory Action', (): void => {
	let state: InventoryState;
	let action: AddInventoryAction;

	beforeEach(
		(): void => {
			state = testStates.defaultState;
			action = {
				type: ActionType.AddInventory,
				newItem: testStates.newItem,
			};
		},
	);

	it('can add a new inventory item', (): void => {
		const newState = addInventory(state, action);
		newState[newState.length - 1].id = 'newId';
		expect(newState).toEqual(testStates.newItemState);
		expect(state).toEqual(testStates.defaultState);
	});

	it('can update an existing inventory item', (): void => {
		action.newItem = testStates.editedItem;
		const newState = addInventory(state, action);
		expect(newState).toEqual(testStates.editedInvState);
		expect(state).toEqual(testStates.defaultState);
	});
});

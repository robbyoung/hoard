import reducer, { AddInventoryAction } from './index';
import { InventoryState } from '../../state';
import { Action } from 'redux';
import { ActionType } from '../actions';
import testInventory from './testInventory';

const DEFAULT_TEST_STATE: InventoryState = {
	inventory: testInventory,
	filteredInventory: [testInventory[0], testInventory[2]],
};

describe('Inventory Reducer', (): void => {
	let state: InventoryState | undefined;
	let action: Action;

	beforeEach(
		(): void => {
			state = DEFAULT_TEST_STATE;
			action = {
				type: undefined,
			};
		},
	);

	it('has a default state if none is passed in', (): void => {
		state = undefined;
		const newState = reducer(state, action);
		expect(newState).toEqual({
			inventory: testInventory,
			filteredInventory: testInventory,
		});
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});

	it('can add a new inventory item', (): void => {
		const addInventoryAction: AddInventoryAction = {
			type: ActionType.AddInventory,
			newItem: testInventory[2],
		}
		const newState = reducer(state, addInventoryAction);
		expect(newState).toEqual({
			inventory: [ ...testInventory, testInventory[2]],
			filteredInventory: DEFAULT_TEST_STATE.filteredInventory,
		});
	});
});

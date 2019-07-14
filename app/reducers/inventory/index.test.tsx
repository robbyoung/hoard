import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { InventoryState } from '../../state';
import { ActionType } from '../actions';
import { AddInventoryAction } from '../../actions/addInventory/addInventory';
import testInventory from './testInventory';
import reducer from './index';

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
		const newItem = cloneDeep(testInventory[2]);
		newItem.id = 'newId';
		const addInventoryAction: AddInventoryAction = {
			type: ActionType.AddInventory,
			newItem: newItem,
		};
		const newState = reducer(state, addInventoryAction);
		newState.inventory[newState.inventory.length - 1].id = 'newId';
		expect(newState).toEqual({
			inventory: [...testInventory, newItem],
			filteredInventory: DEFAULT_TEST_STATE.filteredInventory,
		});
	});

	it('can update an existing inventory item', (): void => {
		const editedItem = cloneDeep(testInventory)[2];
		editedItem.name = 'Edited';
		editedItem.attributes[0].value = 'F';
		const addInventoryAction: AddInventoryAction = {
			type: ActionType.AddInventory,
			newItem: editedItem,
		};
		const newState = reducer(state, addInventoryAction);
		const expectedState = cloneDeep(DEFAULT_TEST_STATE);
		expectedState.inventory[2] = editedItem;
		expect(newState).toEqual(expectedState);
	});
});

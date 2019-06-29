import { Action } from 'redux';
import { InventoryState, Inventory } from '../../state';
import testInventory from './testInventory';
import { cloneDeep } from 'lodash';
import { ActionType } from '../actions';

const defaultState: InventoryState = {
	inventory: testInventory,
	filteredInventory: testInventory,
};

export interface AddInventoryAction extends Action {
	newItem: Inventory;
}

function addInventory(oldState: InventoryState, action: AddInventoryAction): InventoryState {
	const newState = cloneDeep(oldState);
	newState.inventory.push(action.newItem);
	return newState;
}

export default function inventoryReducer(
	state: InventoryState = defaultState,
	action: Action,
): InventoryState {
	switch (action.type) {
		case ActionType.AddInventory:
			return addInventory(state, action as AddInventoryAction);
		case ActionType.RemoveInventory:
			throw Error("Not implemented yet");
		default:
			return cloneDeep(state);
	}
}

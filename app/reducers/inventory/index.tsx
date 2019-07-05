import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { InventoryState, Inventory } from '../../state';
import { ActionType } from '../actions';
import testInventory from './testInventory';

const defaultState: InventoryState = {
	inventory: testInventory,
	filteredInventory: testInventory,
};

export interface AddInventoryAction extends Action {
	newItem: Inventory;
}

function addInventory(
	oldState: InventoryState,
	action: AddInventoryAction,
): InventoryState {
	const newState = cloneDeep(oldState);
	const newItem = cloneDeep(action.newItem);
	const matchingIndex = oldState.inventory.findIndex((item) => newItem.id === item.id);
	if (matchingIndex === -1) {
		newState.inventory.push(newItem);
	} else {
		newState.inventory[matchingIndex] = newItem;
	}
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
			throw Error('Not implemented yet');
		default:
			return cloneDeep(state);
	}
}

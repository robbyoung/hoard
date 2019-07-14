import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import * as uuid from 'uuid';
import { Inventory, InventoryState } from '../../state';

export interface AddInventoryAction extends Action {
	newItem: Inventory;
}

export function addInventory(
	oldState: InventoryState,
	action: AddInventoryAction,
): InventoryState {
	const newState = cloneDeep(oldState);
	const newItem = cloneDeep(action.newItem);
	const matchingIndex = oldState.inventory.findIndex(
		(item): boolean => newItem.id === item.id,
	);

	if (matchingIndex === -1) {
		newItem.id = uuid.v4();
		newState.inventory.push(newItem);
	} else {
		newState.inventory[matchingIndex] = newItem;
	}
	return newState;
}

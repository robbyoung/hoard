import { Action } from 'redux';
import * as uuid from 'uuid';
import { Inventory, InventoryState } from '../../state';

export interface AddInventoryAction extends Action {
	newItem: Inventory;
}

export function addInventory(
	oldState: InventoryState,
	action: AddInventoryAction,
): InventoryState {
	const newState = {
		inventory: [...oldState.inventory],
	};
	const newItem = action.newItem;
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

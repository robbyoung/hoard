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
	const newState = [...oldState];
	const newItem = action.newItem;
	const matchingIndex = oldState.findIndex(
		(item): boolean => newItem.id === item.id,
	);

	if (matchingIndex === -1) {
		newItem.id = uuid.v4();
		newState.push(newItem);
	} else {
		newState[matchingIndex] = newItem;
	}
	return newState;
}

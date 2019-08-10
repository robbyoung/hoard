import { Action } from 'redux';
import { InventoryState } from '../../state';
import { AsyncStorage } from 'react-native';

export interface DeleteInventoryAction extends Action {
	itemId: string;
}

export function deleteInventory(
	oldState: InventoryState,
	action: DeleteInventoryAction,
): InventoryState {
	const newState: InventoryState = [];
	for (var item of oldState) {
		if (item.id !== action.itemId) {
			newState.push(item);
		}
	}

	void AsyncStorage.setItem('inventory', JSON.stringify(newState));

	return newState;
}

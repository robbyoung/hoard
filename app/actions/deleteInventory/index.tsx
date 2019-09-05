import { Action } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { InventoryState } from '../../state';

export interface DeleteInventoryAction extends Action {
	itemId: string;
}

export function deleteInventory(
	oldState: InventoryState,
	action: DeleteInventoryAction,
): InventoryState {
	const newState: InventoryState = [];
	for (const item of oldState) {
		if (item.id !== action.itemId) {
			newState.push(item);
		}
	}

	void AsyncStorage.setItem('inventory', JSON.stringify(newState)).catch(
		(error: Error): void => {
			console.error(
				'Something went wrong while loading inventory: ' + error,
			);
		},
	);

	return newState;
}

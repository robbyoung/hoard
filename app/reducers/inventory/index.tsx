import { Action } from 'redux';
import { AsyncStorage } from 'react-native';
import { InventoryState } from '../../state';
import { ActionType } from '../actions';
import { addInventory, AddInventoryAction } from '../../actions/addInventory';
import {
	DeleteInventoryAction,
	deleteInventory,
} from '../../actions/deleteInventory';
import testInventory from './testInventory';

const defaultState: InventoryState = testInventory;
let savedState: InventoryState = [];

export default function inventoryReducer(
	state: InventoryState = savedState,
	action: Action,
): InventoryState {
	if (state === []) {
		console.error(savedState);
		state = savedState;
	}
	switch (action.type) {
		case ActionType.AddInventory:
			return addInventory(state, action as AddInventoryAction);
		case ActionType.DeleteInventory:
			return deleteInventory(state, action as DeleteInventoryAction);
		default:
			return state;
	}
}

export async function loadSavedInventory(): Promise<void> {
	const state = await AsyncStorage.getItem('inventory');
	if (state === undefined || state === null) {
		savedState = defaultState;
	} else {
		savedState = JSON.parse(state) as InventoryState;
	}
}

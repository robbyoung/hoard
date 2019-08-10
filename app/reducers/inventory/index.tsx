import { Action } from 'redux';
import { InventoryState } from '../../state';
import { ActionType } from '../actions';
import { addInventory, AddInventoryAction } from '../../actions/addInventory';
import {
	DeleteInventoryAction,
	deleteInventory,
} from '../../actions/deleteInventory';
import testInventory from './testInventory';
import { AsyncStorage } from 'react-native';

const defaultState: InventoryState = testInventory;

export default async function inventoryReducer(
	state: InventoryState | undefined = undefined,
	action: Action,
): Promise<InventoryState> {
	state = await loadState(state);
	switch (action.type) {
		case ActionType.AddInventory:
			return addInventory(state, action as AddInventoryAction);
		case ActionType.DeleteInventory:
			return deleteInventory(state, action as DeleteInventoryAction);
		default:
			return state;
	}
}

async function loadState(state: InventoryState | undefined): Promise<InventoryState> {
	if (state != undefined) {
		return state;
	} else {
		const savedState = await AsyncStorage.getItem('inventory');
		if (savedState !== null) {
			return JSON.parse(savedState) as InventoryState;
		}
		return defaultState;
	}
}

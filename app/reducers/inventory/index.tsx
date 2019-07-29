import { Action } from 'redux';
import { InventoryState } from '../../state';
import { ActionType } from '../actions';
import { addInventory, AddInventoryAction } from '../../actions/addInventory';
import {
	DeleteInventoryAction,
	deleteInventory,
} from '../../actions/deleteInventory';
import testInventory from './testInventory';

const defaultState: InventoryState = testInventory;

export default function inventoryReducer(
	state: InventoryState = defaultState,
	action: Action,
): InventoryState {
	switch (action.type) {
		case ActionType.AddInventory:
			return addInventory(state, action as AddInventoryAction);
		case ActionType.DeleteInventory:
			return deleteInventory(state, action as DeleteInventoryAction);
		default:
			return state;
	}
}

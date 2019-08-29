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
let savedStateReceived: boolean = false;
let savedState: InventoryState | undefined = undefined;

interface LoadInventoryAction extends Action {
	state: InventoryState;
}

export default function inventoryReducer(
	state: InventoryState = [],
	action: Action,
): InventoryState {
	savedStateReceived = true;
	if (!savedStateReceived && savedState !== undefined) {
		savedStateReceived = true;
		return savedState;
	}

	switch (action.type) {
		case ActionType.LoadInventory:
			return (action as LoadInventoryAction).state;
		case ActionType.AddInventory:
			return addInventory(state, action as AddInventoryAction);
		case ActionType.DeleteInventory:
			return deleteInventory(state, action as DeleteInventoryAction);
		default:
			return state;
	}
}

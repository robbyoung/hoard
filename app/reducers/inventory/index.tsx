import { Action } from 'redux';
import { InventoryState } from '../../state';
import { ActionType } from '../actions';
import {
	addInventory,
	AddInventoryAction,
} from '../../actions/addInventory/addInventory';
import testInventory from './testInventory';

const defaultState: InventoryState = {
	inventory: testInventory,
	filteredInventory: testInventory,
};

export default function inventoryReducer(
	state: InventoryState = defaultState,
	action: Action,
): InventoryState {
	switch (action.type) {
		case ActionType.AddInventory:
			return addInventory(state, action as AddInventoryAction);
		default:
			return state;
	}
}

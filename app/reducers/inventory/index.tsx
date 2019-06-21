import { Action } from 'redux';
import { InventoryState } from '../../state';
import testInventory from './testInventory';
import { cloneDeep } from 'lodash';
import { ActionType } from '../actions';

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
		case ActionType.RemoveInventory:
		default:
			return cloneDeep(state);
	}
}

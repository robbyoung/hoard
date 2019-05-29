import { Action } from "redux";
import { Inventory } from "../../data/testCategories";
import { InventoryState } from "../../state";

const defaultState: InventoryState = {
	inventory: [],
	filteredInventory: [],
}

export default function inventoryReducer(state: InventoryState = defaultState, action: Action): InventoryState {
	return state;
}
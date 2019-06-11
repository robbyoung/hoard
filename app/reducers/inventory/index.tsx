import { Action } from "redux";
import { Inventory } from "../../data/testCategories";
import { InventoryState } from "../../state";
import { testInventory } from "../../data/testInventory";

const defaultState: InventoryState = {
	inventory: testInventory,
	filteredInventory: testInventory,
};

export default function inventoryReducer(state: InventoryState = defaultState, action: Action): InventoryState {
	return state;
}
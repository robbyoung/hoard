import { Inventory, Category } from "./data/testCategories";

export interface InventoryState {
	inventory: Inventory[];
	filteredInventory: Inventory[];
}

export type CategoriesState = { [key:string]: Category; };

export interface StatsState {
	category: string,
	attribute: string,
};

export interface HoardState {
	inventory: InventoryState;
	categories: CategoriesState;
	stats: StatsState;
}

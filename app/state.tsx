import { Inventory, Category } from "./data/testCategories";
import { ChartData } from "./components/statsScreen/pieChart";

export interface InventoryState {
	inventory: Inventory[];
	filteredInventory: Inventory[];
}

export type CategoriesState = { [key:string]: Category; };

export interface StatsState {
	data: ChartData[],
	category: string,
	attribute: string,
};

export interface HoardState {
	inventory: InventoryState;
	categories: CategoriesState;
	stats: StatsState;
}

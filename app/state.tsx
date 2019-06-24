export enum AttributeType {
	Bool,
	String,
	Int,
	Percent,
	Rating,
}

export interface Attribute {
	name: string;
	value: string;
	type: AttributeType;
}

export interface Inventory {
	name: string;
	id: string;
	category: string;
	attributes: Attribute[];
}

export interface InventoryState {
	inventory: Inventory[];
	filteredInventory: Inventory[];
}

export interface CategoriesState {
	[categoryName: string]: Attribute[];
}

export interface StatsState {
	category: string;
	attribute: string;
}

export interface NewItemState {
	item: Inventory;
}

export interface HoardState {
	inventory: InventoryState;
	categories: CategoriesState;
	stats: StatsState;
	newItem: NewItemState;
}

export enum AttributeType {
	Bool,
	String,
	Number,
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
}

export interface CategoriesState {
	[categoryName: string]: Attribute[];
}

export interface StatsState {
	category: string;
	attribute: string;
}

export interface EditItemState {
	item: Inventory;
	errorMessage: string;
}

export interface HoardState {
	inventory: InventoryState;
	categories: CategoriesState;
	stats: StatsState;
	editItem: EditItemState;
}

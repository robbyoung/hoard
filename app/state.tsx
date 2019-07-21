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

export type InventoryState = Inventory[];

export interface Category {
	attributes: Attribute[];
	icon: string;
}

export interface CategoriesState {
	[categoryName: string]: Category;
}

export interface StatsState {
	category: string;
	attribute: string;
}

export type EditItemState = Inventory;

export type ValidationState = string;

export interface HoardState {
	inventory: InventoryState;
	categories: CategoriesState;
	stats: StatsState;
	editItem: EditItemState;
	validation: ValidationState;
}

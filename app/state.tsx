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

export interface ChartData {
	key: string;
	count: number;
	percentage: number;
	colour: string;
}

export interface StatsState {
	data: ChartData[];
	category: string;
	attribute: string;
	attributeList: string[];
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

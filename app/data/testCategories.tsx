export enum Category {
	Book = 'Book',
	Game = 'Game',
}

export interface Inventory {
	name: string;
	id: string;
	category: Category;
	fields: InventoryFieldLookup;
}

export enum BookFields {
	Completed = 'Completed',
	PageCount = 'Page Count',
	Series = 'Series',
}

export enum GameFields {
	Completed = 'Completed',
}

export type InventoryFieldLookup = { [id: string]: any };

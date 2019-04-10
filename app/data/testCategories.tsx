export interface Inventory {
	name: string;
	category: string;
	id: string;
}

export interface Book extends Inventory {
	category: 'Book';
	completed: boolean;
	pageCount: number;
	series?: string;
}

export interface Game {
	category: 'Game';
	completed: boolean;
}
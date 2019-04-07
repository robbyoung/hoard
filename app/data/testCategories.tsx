export interface Category {
	name: string;
	category: string;
}

export interface Book extends Category {
	category: 'Book';
	completed: boolean;
	pageCount: number;
	series?: string;
}

export interface Game {
	category: 'Game';
	completed: boolean;

}
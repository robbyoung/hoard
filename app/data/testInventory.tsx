import { Category, Book } from "./testCategories";

export const testInventory: Category[] = [{
	name: "Gardens of the Moon",
	completed: true,
	category: 'Book',
	pageCount: 666,
	series: 'Malazan Book of the Fallen',
} as Book, {
	name: "Light in August",
	completed: false,
	category: 'Book',
	pageCount: 507,
} as Book]

import { Book, Inventory } from "./testCategories";

export const testInventory: Inventory[] = [{
	name: "Gardens of the Moon",
	completed: true,
	id: 'testId1',
	category: 'Book',
	pageCount: 666,
	series: 'Malazan Book of the Fallen',
} as Book, {
	name: "Deadhouse Gates",
	completed: true,
	id: 'testId2',
	category: 'Book',
	pageCount: 0,
	series: 'Malazan Book of the Fallen',
} as Book, {
	name: "Memories of Ice",
	completed: true,
	id: 'testId3',
	category: 'Book',
	pageCount: 0,
	series: 'Malazan Book of the Fallen',
} as Book, {
	name: "House of Chains",
	completed: true,
	id: 'testId4',
	category: 'Book',
	pageCount: 0,
	series: 'Malazan Book of the Fallen',
} as Book, {
	name: "Light in August",
	completed: false,
	id: 'testId5',
	category: 'Book',
	pageCount: 507,
} as Book]

import { Book, Inventory } from "./testCategories";

const bookNames = [
	"Gardens of the Moon",
	"Deadhouse Gates",
	"Memories of Ice",
	"House of Chains",
	"Midnight Tides",
	"The Bonehunters",
	"Reaper's Gale",
	"Toll the Hounds",
	"Dust of Dreams",
	"The Crippled God",
	"Tess of the d'Urbervilles",
	"Far from the Madding Crowd",
	"The Mayor of Casterbridge",
	"Eye of the World",
]

export const testInventory: Inventory[] = bookNames.map((name, i) => {
	return {
		name,
		category: 'Book',
		completed: i > 6,
		id: `id${i}`,
	}
});

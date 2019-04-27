import { Inventory, InventoryFieldLookup, Category } from "./testCategories";

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

const gameNames = [
	"Dark Souls",
	"Dark Souls III",
	"Bloodborne",
	"Sekiro",
]

const testBooks: Inventory[] = bookNames.map((name, i) => {
	const fields: InventoryFieldLookup = {
		"completed": i > 6,
	}
	return {
		name,
		id: `idb${i}`,
		category: Category.Book,
		fields,
	}
});

const testGames: Inventory[] = gameNames.map((name, i) => {
	const fields: InventoryFieldLookup = {
		"completed": i > 2,
	}
	return {
		name,
		id: `idg${i}`,
		category: Category.Game,
		fields,
	}
});

export const testInventory = [
	...testBooks,
	...testGames
]

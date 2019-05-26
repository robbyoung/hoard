import { Inventory, Attribute, Category } from './testCategories';

const bookNames = [
	'Gardens of the Moon',
	'Deadhouse Gates',
	'Memories of Ice',
	'House of Chains',
	'Midnight Tides',
	'The Bonehunters',
	"Reaper's Gale",
	'Toll the Hounds',
	'Dust of Dreams',
	'The Crippled God',
	"Tess of the d'Urbervilles",
	'Far from the Madding Crowd',
	'The Mayor of Casterbridge',
	'Eye of the World',
];

const gameNames = ['Dark Souls', 'Dark Souls III', 'Bloodborne', 'Sekiro'];

const testBooks: Inventory[] = bookNames.map(
	(name, i): Inventory => {
		const attributes: Attribute[] = [
			{
				key: 'Completed',
				value: `${i < 8}`,
			},
			{
				key: 'Page Count',
				value: `${i * 100}`,
			},
			{
				key: 'Series',
				value: `${i < 10 ? 'Malazan' : 'N/A' }`,
			},
		];
		return {
			name,
			id: `idb${i}`,
			category: Category.Book,
			attributes,
		};
	},
);

const testGames: Inventory[] = gameNames.map(
	(name, i): Inventory => {
		const attributes: Attribute[] = [
			{
				key: 'Completed',
				value: `${i < 2}`,
			},
		];
		return {
			name,
			id: `idg${i}`,
			category: Category.Game,
			attributes,
		};
	},
);

export const testInventory = [...testBooks, ...testGames];

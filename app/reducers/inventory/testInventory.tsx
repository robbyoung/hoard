import { Attribute, Inventory, AttributeType } from '../../state';

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
				name: 'Completed',
				value: `${i < 8 ? 'True' : 'False'}`,
				type: AttributeType.Bool,
			},
			{
				name: 'Page Count',
				value: `${i * 100}`,
				type: AttributeType.Number,
			},
			{
				name: 'Series',
				value: `${i < 10 ? 'Malazan' : 'N/A'}`,
				type: AttributeType.String,
			},
		];
		return {
			name,
			id: `idb${i}`,
			category: 'Book',
			attributes,
		};
	},
);

const testGames: Inventory[] = gameNames.map(
	(name, i): Inventory => {
		const attributes: Attribute[] = [
			{
				name: 'Completed',
				value: `${i < 2 ? 'True' : 'False'}`,
				type: AttributeType.Bool,
			},
		];
		return {
			name,
			id: `idg${i}`,
			category: 'Game',
			attributes,
		};
	},
);

export default [...testBooks, ...testGames];

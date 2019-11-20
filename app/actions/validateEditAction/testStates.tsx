import { CategoriesState, InventoryState, Inventory } from '../../state';

export const testCategories: CategoriesState = {
	category: {
		icon: '',
		attributes: [],
		id: '',
	},
};

const inventoryNames = ['Lemon', 'Orange', 'Apple', 'Pear', 'Lime'];
export const testInventory: InventoryState = inventoryNames.map(
	(name: string): Inventory => {
		return {
			name,
			id: `${name}ID`,
			category: 'category',
			attributes: [],
		};
	},
);

export function createTestItem(
	name: string,
	category: string,
	newItem: boolean,
): Inventory {
	return {
		name,
		id: `${name}ID${newItem ? 'new' : ''}`,
		category,
		attributes: [],
	};
}

import { Category } from '../data/testCategories';

const DARK_GREEN = '#009933';
const DARK_RED = '#cc0000';

export function getCategoryColour(category: Category): string {
	switch (category) {
		case Category.Book:
			return DARK_GREEN;
		case Category.Game:
			return DARK_RED;
		default:
			throw new Error('Unknown category');
	}
}

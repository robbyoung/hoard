import { Category } from '../data/testCategories';
import { Icons } from 'react-native-fontawesome';

export function getCategoryIcon(category: Category): string {
	switch (category) {
		case Category.Book:
			return Icons.book;
		case Category.Game:
			return Icons.gamepad;
		default:
			throw new Error('Unknown category');
	}
}

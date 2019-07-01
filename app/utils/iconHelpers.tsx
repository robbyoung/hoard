import { Icons } from 'react-native-fontawesome';

export function getCategoryIcon(category: string): string {
	switch (category) {
		case 'Book':
			return Icons.book;
		case 'Game':
			return Icons.gamepad;
		default:
			throw new Error('Unknown category');
	}
}

const DARK_GREEN = '#009933';
const DARK_RED = '#cc0000';

export function getCategoryColour(category: string): string {
	switch (category) {
		case 'Book':
			return DARK_GREEN;
		case 'Game':
			return DARK_RED;
		default:
			throw new Error('Unknown category');
	}
}

const CHART_COLOURS: string[] = [
	'#db5353', // red
	'#2f69c6', // blue
	'#27b239', // green
	'#dde02f', // yellow
	'#e2a618', // orange
	'#b02ab2', // purple
	'#8e8e8e', // grey
	'#4ed3d3', // teal
	'#000000', // black
];

export function getColourForWedgeIndex(index: number): string {
	return CHART_COLOURS[index % CHART_COLOURS.length];
}

import { Action } from 'redux';
import { StatsState, Inventory, ChartData, Attribute } from '../../state';

export interface SetStatsAttributeAction extends Action {
	inventory: Inventory[];
	attribute: string;
	grouper: string;
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

function getColourForWedgeIndex(index: number): string {
	return CHART_COLOURS[index % CHART_COLOURS.length];
}

export function setStatsAttribute(
	action: SetStatsAttributeAction,
	oldState: StatsState,
): StatsState {
	if (action.attribute == 'Pick One') {
		const newState: StatsState = {
			...oldState,
			attribute: 'Pick One',
			grouper: 'None',
			data: [],
		};
		return newState;
	}

	const items = action.inventory.filter(
		(item: Inventory): boolean => oldState.category === item.category,
	);
	let totalGrouper = 0;
	const tally: { [id: string]: number } = {};
	for (const item of items) {
		const match = item.attributes.find(
			(a: Attribute): boolean => a.name === action.attribute,
		);
		const value = match ? match.value : 'Unknown';
		let amountToAdd = 1;
		if (action.grouper !== 'None') {
			const result = item.attributes.find(
				(a: Attribute): boolean => a.name === action.grouper,
			);
			if (result !== undefined) {
				amountToAdd = parseInt(result.value);
				totalGrouper += amountToAdd;
			}
		}
		if (tally[value]) {
			tally[value] += amountToAdd;
		} else {
			tally[value] = amountToAdd;
		}
	}

	if (action.grouper === 'None') {
		totalGrouper = items.length;
	}

	const data: ChartData[] = [];
	let wedgeIndex = 0;
	for (const key in tally) {
		data.push({
			key,
			count: tally[key],
			percentage: Math.round((tally[key] / totalGrouper) * 10000) / 100,
			colour: getColourForWedgeIndex(wedgeIndex),
		});
		wedgeIndex++;
	}
	return {
		...oldState,
		data,
		attribute: action.attribute,
		grouper: action.grouper,
	};
}

import { Action } from 'redux';
import { StatsState, Inventory, ChartData } from '../../state';
import { NO_ATTRIBUTE_SELECTED_TEXT } from '../setStatsCategory';

export interface SetAttributeAction extends Action {
	inventory: Inventory[];
	attribute: string;
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
	action: SetAttributeAction,
	oldState: StatsState,
): StatsState {
	if (action.attribute == NO_ATTRIBUTE_SELECTED_TEXT) {
		const newState: StatsState = {
			...oldState,
			attribute: NO_ATTRIBUTE_SELECTED_TEXT,
			data: [],
		};
		return newState;
	}

	const items = action.inventory.filter(
		(item): boolean => oldState.category === item.category,
	);
	const tally: { [id: string]: number } = {};
	for (const item of items) {
		const match = item.attributes.find(
			(a): boolean => a.name === action.attribute,
		);
		const value = match ? match.value : 'Unknown';
		if (tally[value]) {
			tally[value]++;
		} else {
			tally[value] = 1;
		}
	}

	const data: ChartData[] = [];
	let wedgeIndex = 0;
	for (const key in tally) {
		data.push({
			key,
			count: tally[key],
			percentage: (tally[key] / items.length) * 100,
			colour: getColourForWedgeIndex(wedgeIndex),
		});
		wedgeIndex++;
	}
	return {
		data,
		category: oldState.category,
		attribute: action.attribute,
		attributeList: oldState.attributeList,
	};
}

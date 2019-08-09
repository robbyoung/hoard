import { Action } from 'redux';
import { StatsState, Attribute, AttributeType } from '../../state';

export interface SetStatsCategoryAction extends Action {
	category: string;
	attributes: Attribute[];
}

export function setStatsCategory(
	action: SetStatsCategoryAction,
	oldState: StatsState,
): StatsState {
	if (oldState.category == action.category) {
		return oldState;
	}

	const groupers = action.attributes.filter((a) => {
		return a.type === AttributeType.Number;
	});
	const attributes = action.attributes.filter((a) => {
		return a.type === AttributeType.Bool || a.type === AttributeType.Combo;
	});

	return {
		...oldState,
		data: [],
		category: action.category,
		attribute: 'Pick One',
		attributeList: ['Pick One', ...attributes.map((a): string => a.name)],
		grouper: 'None',
		grouperList: ['None', ...groupers.map((a): string => a.name)],
	};
}

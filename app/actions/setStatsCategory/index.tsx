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

	if (action.category == 'Pick One') {
		return {
			data: [],
			category: action.category,
			categoryList: oldState.categoryList,
			attribute: 'Pick One',
			attributeList: ['Pick One'],
			grouper: 'None',
			grouperList: ['None'],
		};
	}

	const attributes = action.attributes
		.filter(
			(a): boolean => {
				return (
					a.type === AttributeType.Bool ||
					a.type === AttributeType.Combo
				);
			},
		)
		.map((a): string => a.name);
	const groupers = action.attributes
		.filter(
			(a): boolean => {
				return a.type === AttributeType.Number;
			},
		)
		.map((a): string => a.name);

	return {
		...oldState,
		data: [],
		category: action.category,
		attribute: 'Pick One',
		attributeList: ['Pick One', ...attributes],
		grouper: 'None',
		grouperList: ['None', ...groupers],
	};
}

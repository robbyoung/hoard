import { Action } from 'redux';
import { StatsState, Attribute } from '../../state';

export interface SetCategoryAction extends Action {
	category: string;
	attributes: Attribute[];
}

export const NO_ATTRIBUTE_SELECTED_TEXT = 'Pick One';

export function setStatsCategory(
	action: SetCategoryAction,
	oldState: StatsState,
): StatsState {
	if (oldState.category == action.category) {
		return oldState;
	}

	const attributeList = [
		NO_ATTRIBUTE_SELECTED_TEXT,
		...action.attributes.map((a): string => a.name),
	];
	return {
		data: [],
		category: action.category,
		attribute: NO_ATTRIBUTE_SELECTED_TEXT,
		attributeList,
	};
}

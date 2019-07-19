import { Action } from 'redux';
import { StatsState } from '../../state';

export interface SetCategoryAction extends Action {
	category: string;
}

export function setStatsCategory(
	action: SetCategoryAction,
	oldState: StatsState,
): StatsState {
	return {
		category: action.category,
		attribute: oldState.attribute,
	};
}

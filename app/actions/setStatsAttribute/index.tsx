import { Action } from 'redux';
import { StatsState } from '../../state';

export interface SetAttributeAction extends Action {
	attribute: string;
}

export function setStatsAttribute(
	action: SetAttributeAction,
	oldState: StatsState,
): StatsState {
	return {
		category: oldState.category,
		attribute: action.attribute,
	};
}

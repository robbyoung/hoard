import { Action } from 'redux';
import { StatsState, Inventory } from '../../state';

export interface SetGrouperAction extends Action {
	inventory: Inventory[];
	grouper: string;
}

export function setStatsGrouper(
	action: SetGrouperAction,
	oldState: StatsState,
): StatsState {
	return oldState;
}

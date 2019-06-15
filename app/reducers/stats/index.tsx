import { Action } from 'redux';
import { StatsState } from '../../state';
import { cloneDeep } from 'lodash';
import { ActionType } from '../actions';

const defaultState: StatsState = {
	category: 'Book',
	attribute: 'Completed',
};

export interface SetCategoryAction extends Action {
	category: string;
}

export interface SetAttributeAction extends Action {
	attribute: string;
}

function setCategory(
	action: SetCategoryAction,
	oldState: StatsState,
): StatsState {
	return {
		category: action.category,
		attribute: oldState.attribute,
	};
}

function SetAttribute(
	action: SetAttributeAction,
	oldState: StatsState,
): StatsState {
	return {
		category: oldState.category,
		attribute: action.attribute,
	};
}

export default function statsReducer(
	state: StatsState = defaultState,
	action: Action,
): StatsState {
	switch (action.type) {
		case ActionType.SetStatsCategory:
			return setCategory(action as SetCategoryAction, state);
		case ActionType.SetStatsAttribute:
			return SetAttribute(action as SetAttributeAction, state);
		default:
			return cloneDeep(state);
	}
}

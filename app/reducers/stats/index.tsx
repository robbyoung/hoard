import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { StatsState } from '../../state';
import { ActionType } from '../actions';
import {
	setStatsAttribute,
	SetAttributeAction,
} from '../../actions/setStatsAttribute';
import {
	setStatsCategory,
	SetCategoryAction,
} from '../../actions/setStatsCategory';

const defaultState: StatsState = {
	category: 'Book',
	attribute: 'Completed',
};

export default function statsReducer(
	state: StatsState = defaultState,
	action: Action,
): StatsState {
	switch (action.type) {
		case ActionType.SetStatsCategory:
			return setStatsCategory(action as SetCategoryAction, state);
		case ActionType.SetStatsAttribute:
			return setStatsAttribute(action as SetAttributeAction, state);
		default:
			return cloneDeep(state);
	}
}

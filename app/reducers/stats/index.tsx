import { Action } from 'redux';
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
import { setStatsGrouper, SetGrouperAction } from '../../actions/setStatsGrouper';

const defaultState: StatsState = {
	data: [],
	category: 'Pick One',
	categoryList: ['Pick One', 'Book', 'Game'],
	attribute: 'Pick One',
	attributeList: ['Pick One'],
	grouper: 'None',
	grouperList: ['None']
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
		case ActionType.SetStatsAttribute:
			return setStatsGrouper(action as SetGrouperAction, state);
		default:
			return state;
	}
}

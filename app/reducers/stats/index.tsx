import { Action } from 'redux';
import { StatsState } from '../../state';
import { ActionType } from '../actions';
import {
	SetStatsAttributeAction,
	setStatsAttribute,
} from '../../actions/setStatsAttribute';
import {
	setStatsCategory,
	SetStatsCategoryAction,
} from '../../actions/setStatsCategory';

const defaultState: StatsState = {
	data: [],
	category: 'Pick One',
	categoryList: ['Pick One', 'Book', 'Game'],
	attribute: 'Pick One',
	attributeList: ['Pick One'],
	grouper: 'None',
	grouperList: ['None'],
};

export default function statsReducer(
	state: StatsState = defaultState,
	action: Action,
): StatsState {
	switch (action.type) {
		case ActionType.SetStatsCategory:
			return setStatsCategory(action as SetStatsCategoryAction, state);
		case ActionType.SetStatsAttribute:
			return setStatsAttribute(action as SetStatsAttributeAction, state);
		case ActionType.SetStatsAttribute:
		default:
			return state;
	}
}

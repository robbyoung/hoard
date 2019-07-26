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

const defaultState: StatsState = {
	data: [],
	category: 'Book',
	attribute: 'Pick One',
	attributeList: ['Pick One', 'Completed', 'Page Count', 'Series'],
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
			return state;
	}
}

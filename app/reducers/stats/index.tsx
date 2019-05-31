import { Action } from "redux";
import { StatsState } from "../../state";
import { cloneDeep } from 'lodash';

const defaultState: StatsState = {
	data: [],
	category: '',
	attribute: '',
}

export enum StatsActionType {
	SetCategory = 'SET CATEGORY',
	SetAttribute = 'SET ATTRIBUTE',
}

export default function statsReducer(state: StatsState = defaultState, action: Action): StatsState {
	const newState = cloneDeep(state);
	switch (action.type) {
		case StatsActionType.SetCategory: 
		case StatsActionType.SetAttribute:
		default:
			return newState;
	}
}

import { Action } from "redux";
import { StatsState } from "../../state";

const defaultState: StatsState = {
	data: [],
	category: '',
	attribute: '',
}

export default function statsReducer(state: StatsState = defaultState, action: Action): StatsState {
	return state;
}
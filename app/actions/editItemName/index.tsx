import { Action } from 'redux';
import { EditItemState } from '../../state';

export interface EditItemNameAction extends Action {
	name: string;
}

export function setName(
	oldState: EditItemState,
	action: EditItemNameAction,
): EditItemState {
	const newState = Object.assign(oldState);
	newState.name = action.name;
	return newState;
}

import { Action } from 'redux';
import { EditItemState } from '../../state';

export interface EditItemNameAction extends Action {
	name: string;
}

export function editItemName(
	oldState: EditItemState,
	action: EditItemNameAction,
): EditItemState {
	const newState: EditItemState = {
		...oldState,
		name: action.name,
	};
	newState.name = action.name;
	return newState;
}

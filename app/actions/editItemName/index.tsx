import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState } from '../../state';

export interface EditItemNameAction extends Action {
	name: string;
}

export function setName(
	oldState: EditItemState,
	action: EditItemNameAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	newState.item.name = action.name;
	newState.errorMessage = '';
	return newState;
}

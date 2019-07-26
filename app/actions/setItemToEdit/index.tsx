import { Action } from 'redux';
import { EditItemState, Inventory } from '../../state';
import { defaultState } from '../../reducers/editItem';

export interface SetItemToEditAction extends Action {
	newItem?: Inventory;
}

export function setItemToEdit(
	oldState: EditItemState,
	action: SetItemToEditAction,
): EditItemState {
	if (action.newItem !== undefined) {
		return action.newItem;
	} else {
		return defaultState;
	}
}

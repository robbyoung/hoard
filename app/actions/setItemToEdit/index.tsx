import { Action } from 'redux';
import { cloneDeep } from 'lodash';
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
		return cloneDeep(action.newItem);
	} else {
		return cloneDeep(defaultState);
	}
}

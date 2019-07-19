import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState, Inventory } from '../../state';
import { defaultState } from '../../reducers/editItem';

export interface SetItemToEditAction extends Action {
	newItem?: Inventory;
}

export function resetEditItem(
	oldState: EditItemState,
	action: SetItemToEditAction,
): EditItemState {
	if (action.newItem !== undefined) {
		return {
			item: cloneDeep(action.newItem),
			errorMessage: '',
		};
	} else {
		return cloneDeep(defaultState);
	}
}

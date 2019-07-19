import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState } from '../../state';
import { ActionType } from '../actions';
import { setName, EditItemNameAction } from '../../actions/editItemName';
import {
	setCategory,
	EditItemCategoryAction,
} from '../../actions/editItemCategory';
import {
	setAttribute,
	EditItemAttributeAction,
} from '../../actions/editItemAttribute';
import {
	resetEditItem,
	SetItemToEditAction,
} from '../../actions/setItemToEdit';
import {
	validateEdit,
	ValidateEditAction,
} from '../../actions/validateEditAction';

export const defaultState: EditItemState = {
	item: {
		id: '',
		name: '',
		category: '',
		attributes: [],
	},
	errorMessage: '',
};

export default function inventoryReducer(
	state: EditItemState = defaultState,
	action: Action,
): EditItemState {
	switch (action.type) {
		case ActionType.EditItemName:
			return setName(state, action as EditItemNameAction);
		case ActionType.EditItemCategory:
			return setCategory(state, action as EditItemCategoryAction);
		case ActionType.EditItemAttribute:
			return setAttribute(state, action as EditItemAttributeAction);
		case ActionType.SetItemToEdit:
			return resetEditItem(state, action as SetItemToEditAction);
		case ActionType.ValidateEdit:
			return validateEdit(state, action as ValidateEditAction);
		default:
			return cloneDeep(state);
	}
}

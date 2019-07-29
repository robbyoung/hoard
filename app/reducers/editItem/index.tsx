import { Action } from 'redux';
import { EditItemState } from '../../state';
import { ActionType } from '../actions';
import { editItemName, EditItemNameAction } from '../../actions/editItemName';
import {
	editItemCategory,
	EditItemCategoryAction,
} from '../../actions/editItemCategory';
import {
	editItemAttribute,
	EditItemAttributeAction,
} from '../../actions/editItemAttribute';
import {
	setItemToEdit,
	SetItemToEditAction,
} from '../../actions/setItemToEdit';

export const defaultState: EditItemState = {
	id: '',
	name: '',
	category: '',
	attributes: [],
};

export default function editItemReducer(
	state: EditItemState = defaultState,
	action: Action,
): EditItemState {
	switch (action.type) {
		case ActionType.EditItemName:
			return editItemName(state, action as EditItemNameAction);
		case ActionType.EditItemCategory:
			return editItemCategory(state, action as EditItemCategoryAction);
		case ActionType.EditItemAttribute:
			return editItemAttribute(state, action as EditItemAttributeAction);
		case ActionType.SetItemToEdit:
			return setItemToEdit(state, action as SetItemToEditAction);
		default:
			return state;
	}
}

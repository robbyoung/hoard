import { Action } from 'redux';
import uuid from 'uuid';
import { EditCategoryState } from '../../state';
import { ActionType } from '../actions';
import {
	editCategoryName,
	EditCategoryNameAction,
} from '../../actions/editCategoryName';
import {
	editCategoryAttribute,
	EditCategoryAttributeAction,
} from '../../actions/editCategoryAttribute';
import {
	setCategoryToEdit,
	SetCategoryToEditAction,
} from '../../actions/setCategoryToEdit';
import {
	EditCategoryIconAction,
	editCategoryIcon,
} from '../../actions/editCategoryIcon';

export const defaultState: EditCategoryState = {
	name: '',
	category: {
		icon: '',
		attributes: [],
		id: uuid.v4(),
	},
};

export default function editItemReducer(
	state: EditCategoryState = defaultState,
	action: Action,
): EditCategoryState {
	switch (action.type) {
		case ActionType.EditCategoryName:
			return editCategoryName(state, action as EditCategoryNameAction);
		case ActionType.EditCategoryIcon:
			return editCategoryIcon(state, action as EditCategoryIconAction);
		case ActionType.EditCategoryAttribute:
			return editCategoryAttribute(
				state,
				action as EditCategoryAttributeAction,
			);
		case ActionType.SetCategoryToEdit:
			return setCategoryToEdit(state, action as SetCategoryToEditAction);
		default:
			return state;
	}
}

import { Action } from 'redux';
import { EditCategoryState } from '../../state';
import { ActionType } from '../actions';
import { editCategoryName, EditCategoryNameAction } from '../../actions/editCategoryName';
import { editCategoryAttribute, EditCategoryAttributeAction } from '../../actions/editCategoryAttribute';
import { setCategoryToEdit, SetCategoryToEditAction } from '../../actions/setCategoryToEdit';

export const defaultState: EditCategoryState = {
	name: '',
	category: {
		icon: '',
		attributes: [],
	}
};

export default function editItemReducer(
	state: EditCategoryState = defaultState,
	action: Action,
): EditCategoryState {
	switch (action.type) {
		case ActionType.EditCategoryName:
			return editCategoryName(state, action as EditCategoryNameAction);
		case ActionType.EditCategoryAttribute:
			return editCategoryAttribute(state, action as EditCategoryAttributeAction);
		case ActionType.SetCategoryToEdit:
			return setCategoryToEdit(state, action as SetCategoryToEditAction);
		default:
			return state;
	}
}

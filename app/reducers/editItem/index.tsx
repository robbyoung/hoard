import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState, Attribute, Inventory } from '../../state';
import { ActionType } from '../actions';

const defaultState: EditItemState = {
	item: {
		id: '',
		name: '',
		category: '',
		attributes: [],
	},
};

export interface SetItemToEditAction extends Action {
	newItem?: Inventory;
}

export interface EditItemNameAction extends Action {
	name: string;
}

export interface EditItemCategoryAction extends Action {
	categoryName: string;
	attributes: Attribute[];
}

export interface EditItemAttributeAction extends Action {
	attribute: Attribute;
}

function setName(
	oldState: EditItemState,
	action: EditItemNameAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	newState.item.name = action.name;
	return newState;
}

function setCategory(
	oldState: EditItemState,
	action: EditItemCategoryAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	newState.item.category = action.categoryName;
	newState.item.attributes = cloneDeep(action.attributes);
	return newState;
}

function setAttribute(
	oldState: EditItemState,
	action: EditItemAttributeAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	const match = newState.item.attributes.find(
		(attr): boolean => attr.name === action.attribute.name,
	);
	if (match) {
		match.value = action.attribute.value;
	}
	return newState;
}

export function resetEditItem(
	oldState: EditItemState,
	action: SetItemToEditAction,
): EditItemState {
	if (action.newItem !== undefined) {
		return {
			item: cloneDeep(action.newItem),
		};
	} else {
		return cloneDeep(defaultState);
	}
}

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
		default:
			return cloneDeep(state);
	}
}

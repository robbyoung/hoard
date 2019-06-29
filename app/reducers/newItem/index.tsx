import { Action } from 'redux';
import { NewItemState, Attribute } from '../../state';
import { cloneDeep } from 'lodash';
import { ActionType } from '../actions';

const defaultState: NewItemState = {
	item: {
		id: "",
		name: "",
		category: "",
		attributes: [],
	},
};

export interface SetNewItemNameAction extends Action {
	name: string;
}

export interface SetNewItemCategoryAction extends Action {
	categoryName: string;
	attributes: Attribute[];
}

export interface SetNewItemAttributeAction extends Action {
	attribute: Attribute;
}

function setName(oldState: NewItemState, action: SetNewItemNameAction): NewItemState {
	const newState = cloneDeep(oldState);
	newState.item.name = action.name;
	return newState;
}

function setCategory(oldState: NewItemState, action: SetNewItemCategoryAction): NewItemState {
	const newState = cloneDeep(oldState);
	newState.item.category = action.categoryName;
	newState.item.attributes = cloneDeep(action.attributes);
	return newState;
}

function setAttribute(oldState: NewItemState, action: SetNewItemAttributeAction): NewItemState {
	const newState = cloneDeep(oldState);
	const match = newState.item.attributes.find((attr): boolean => attr.name === action.attribute.name);
	if (match) {
		match.value = action.attribute.value;
	}
	return newState;
}

export default function inventoryReducer(
	state: NewItemState = defaultState,
	action: Action,
): NewItemState {
	switch (action.type) {
		case ActionType.SetNewItemName:
			return setName(state, action as SetNewItemNameAction);
		case ActionType.SetNewItemCategory:
			return setCategory(state, action as SetNewItemCategoryAction);
		case ActionType.SetNewItemAttribute:
			return setAttribute(state, action as SetNewItemAttributeAction);
		case ActionType.ResetNewItem:
			return cloneDeep(defaultState);
		default:
			return cloneDeep(state);
	}
}

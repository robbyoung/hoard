import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import {
	EditItemState,
	Attribute,
	Inventory,
	CategoriesState,
	InventoryState,
} from '../../state';
import { ActionType } from '../actions';

const defaultState: EditItemState = {
	item: {
		id: '',
		name: '',
		category: '',
		attributes: [],
	},
	errorMessage: '',
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

export interface ValidateEditAction extends Action {
	inventory: InventoryState;
	categories: CategoriesState;
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

function resetEditItem(
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

function validateEdit(
	oldState: EditItemState,
	action: ValidateEditAction,
): EditItemState {
	const newState = cloneDeep(oldState);
	const item = oldState.item;
	const categories = action.categories;
	const inventory = action.inventory.inventory;

	if (
		inventory.find(
			(inv): boolean => inv.name === item.name && inv.id !== item.id,
		)
	) {
		newState.errorMessage = 'An item already exists with that name';
	} else if (categories[item.category] === undefined) {
		newState.errorMessage = 'Please select a category';
	} else {
		newState.errorMessage = '';
	}

	return newState;
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
		case ActionType.ValidateEdit:
			return validateEdit(state, action as ValidateEditAction);
		default:
			return cloneDeep(state);
	}
}

import { Action } from 'redux';
import {
	EditItemState,
	CategoriesState,
	InventoryState,
	ValidationState,
} from '../../state';

export enum EditItemErrors {
	DuplicateName = 'An item already exists with that name',
	InvalidCategory = 'Please select a category',
	InvalidName = 'Please give your item a name',
}

export interface ValidateEditItemAction extends Action {
	inventory: InventoryState;
	categories: CategoriesState;
	editItem: EditItemState;
}

export function validateEditItem(
	oldState: ValidationState,
	action: ValidateEditItemAction,
): ValidationState {
	let newState = '';
	const item = action.editItem;
	const categories = action.categories;
	const inventory = action.inventory;

	if (
		inventory.find(
			(inv): boolean => inv.name === item.name && inv.id !== item.id,
		)
	) {
		newState = EditItemErrors.DuplicateName;
	} else if (categories[item.category] === undefined) {
		newState = EditItemErrors.InvalidCategory;
	} else if (item.name === '') {
		newState = EditItemErrors.InvalidName;
	}

	return newState;
}

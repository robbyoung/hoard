import { Action } from 'redux';
import {
	EditItemState,
	CategoriesState,
	InventoryState,
	ValidationState,
} from '../../state';

export interface ValidateEditItemAction extends Action {
	inventory: InventoryState;
	categories: CategoriesState;
	editItem: EditItemState;
}

export function validateEdit(
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
		newState = 'An item already exists with that name';
	} else if (categories[item.category] === undefined) {
		newState = 'Please select a category';
	} else if (item.name === '') {
		newState = 'Please give your item a name';
	}

	return newState;
}

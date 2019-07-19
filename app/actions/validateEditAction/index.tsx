import { Action } from 'redux';
import { cloneDeep } from 'lodash';
import { EditItemState, CategoriesState, InventoryState } from '../../state';

export interface ValidateEditAction extends Action {
	inventory: InventoryState;
	categories: CategoriesState;
}

export function validateEdit(
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
	} else if (item.name === '') {
		newState.errorMessage = 'Please give your item a name';
	} else {
		newState.errorMessage = '';
	}

	return newState;
}

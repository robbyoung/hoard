import { Action } from 'redux';
import { EditCategoryState } from '../../state';

export interface EditCategoryIconAction extends Action {
	icon: string;
}

export function editCategoryIcon(
	oldState: EditCategoryState,
	action: EditCategoryIconAction,
): EditCategoryState {
	return {
		name: oldState.name,
		category: {
			attributes: oldState.category.attributes,
			icon: action.icon,
		},
	};
}

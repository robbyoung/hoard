import { Action } from 'redux';
import { EditCategoryState, Attribute } from '../../state';

export interface EditCategoryAttributeAction extends Action {
	attribute: Attribute;
}

export function editCategoryAttribute(
	oldState: EditCategoryState,
	action: EditCategoryAttributeAction,
): EditCategoryState {
	const newAttribute: Attribute = action.attribute;
	const attributes: Attribute[] = [...oldState.category.attributes];
	const index: number = attributes.findIndex(
		(a: Attribute) => newAttribute.name === a.name,
	);
	if (index !== -1) {
		attributes[index] = newAttribute;
	} else {
		attributes.push(newAttribute);
	}
	return {
		name: oldState.name,
		category: {
			icon: oldState.category.icon,
			attributes,
		},
	};
}

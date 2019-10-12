import { Action } from 'redux';
import { EditCategoryState, Attribute } from '../../state';

export interface EditCategoryAttributeAction extends Action {
	attribute: Attribute;
	delete: boolean;
}

export function editCategoryAttribute(
	oldState: EditCategoryState,
	action: EditCategoryAttributeAction,
): EditCategoryState {
	const newAttribute: Attribute = action.attribute;
	let attributes: Attribute[] = [...oldState.category.attributes];
	const index: number = attributes.findIndex(
		(a: Attribute) => newAttribute.name === a.name,
	);

	if (index === -1) {
		attributes.push(newAttribute);
	} else if (action.delete === true) {
		attributes = attributes.filter((_a: Attribute, i: number) => {
			return i !== index;
		});
	} else {
		attributes[index] = newAttribute;
	}

	return {
		name: oldState.name,
		category: {
			icon: oldState.category.icon,
			attributes,
		},
	};
}

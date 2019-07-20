import { AttributeType, EditItemState, Attribute } from '../../state';

export function createState(attributes: Attribute[]): EditItemState {
	return {
		item: {
			name: 'Test Inventory',
			id: 'id',
			category: 'Test Category',
			attributes,
		},
		errorMessage: '',
	};
}

export function createAttribute(index: number, value: string): Attribute {
	return {
		name: `Attribute${index}`,
		value,
		type: AttributeType.String,
	};
}

export function createAttributes(count: number): Attribute[] {
	const attributes: Attribute[] = [];
	for (let i = 0; i < count; i++) {
		attributes.push(createAttribute(i, 'Default value'));
	}
	return attributes;
}

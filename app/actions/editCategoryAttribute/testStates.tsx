import { AttributeType, EditCategoryState, Attribute } from '../../state';

function createAttribute(index: number): Attribute {
	return {
		name: `attr${index}`,
		value: `val${index}`,
		type: index % 2 == 0 ? AttributeType.Bool : AttributeType.Number,
	};
}

export function createAlteredAttribute(index: number): Attribute {
	return {
		name: `attr${index}`,
		value: `valAlt${index}`,
		type: AttributeType.Combo,
	};
}

export function createTestState(
	numAttributes: number,
	differentIndex = -1,
	deleteIndex = -1,
): EditCategoryState {
	const attributes: Attribute[] = [];
	for (let i = 0; i < numAttributes; i++) {
		if (i !== deleteIndex) {
			attributes.push(
				differentIndex === i
					? createAlteredAttribute(i)
					: createAttribute(i),
			);
		}
	}
	if (differentIndex === numAttributes) {
		attributes.push(createAlteredAttribute(numAttributes));
	}
	return {
		name: 'TestCategory',
		category: {
			icon: 'TestIcon',
			attributes,
		},
	};
}

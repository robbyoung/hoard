import { AttributeType, EditItemState, CategoriesState } from '../../state';

export const testCategories: CategoriesState = {
	noAttributes: [],
	oneAttribute: [
		{
			name: 'A1',
			value: 'Text',
			type: AttributeType.String,
		},
	],
	twoAttributes: [
		{
			name: 'A1',
			value: 'T',
			type: AttributeType.Bool,
		},
		{
			name: 'A2',
			value: 'Text',
			type: AttributeType.String,
		},
	],
};

export function createTestState(category: string): EditItemState {
	return {
		item: {
			name: 'testState',
			id: 'testState',
			category,
			attributes: testCategories[category],
		},
		errorMessage: '',
	};
}

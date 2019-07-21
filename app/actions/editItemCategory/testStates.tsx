import { AttributeType, EditItemState, CategoriesState } from '../../state';

export const testCategories: CategoriesState = {
	noAttributes: {
		icon: '',
		attributes: [],
	},
	oneAttribute: {
		icon: '',
		attributes: [
			{
				name: 'A1',
				value: 'Text',
				type: AttributeType.String,
			},
		],
	},
	twoAttributes: {
		icon: '',
		attributes: [
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
	},
};

export function createTestState(category: string): EditItemState {
	return {
		name: 'testState',
		id: 'testState',
		category,
		attributes: testCategories[category].attributes,
	};
}

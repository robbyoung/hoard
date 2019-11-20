import { AttributeType, EditItemState, CategoriesState } from '../../state';

export const testCategories: CategoriesState = {
	noAttributes: {
		icon: '',
		attributes: [],
		id: '',
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
		id: '',
	},
	twoAttributes: {
		icon: '',
		attributes: [
			{
				name: 'A1',
				value: 'True',
				type: AttributeType.Bool,
			},
			{
				name: 'A2',
				value: 'Text',
				type: AttributeType.String,
			},
		],
		id: '',
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

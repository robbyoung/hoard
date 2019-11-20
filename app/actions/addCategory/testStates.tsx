import { AttributeType, CategoriesState, Category } from '../../state';

export function createCategory(): Category {
	return {
		icon: 'icon',
		attributes: [
			{
				name: 'Completed',
				value: 'True',
				type: AttributeType.Bool,
			},
			{
				name: 'Info',
				value: 'Test info',
				type: AttributeType.String,
			},
		],
		id: '',
	};
}

export function createCategories(count: number): CategoriesState {
	const state: CategoriesState = {};
	for (let i = 1; i <= count; i++) {
		state[`${i}`] = createCategory();
	}
	return state;
}

export const alteredCategory: Category = {
	icon: 'alt-icon',
	attributes: [
		{
			name: 'Completed',
			value: 'False',
			type: AttributeType.Bool,
		},
	],
	id: '',
};

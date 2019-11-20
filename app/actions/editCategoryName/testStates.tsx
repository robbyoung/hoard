import { AttributeType, EditCategoryState } from '../../state';

export function createTestState(name: string): EditCategoryState {
	return {
		name,
		category: {
			icon: '',
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
		},
	};
}

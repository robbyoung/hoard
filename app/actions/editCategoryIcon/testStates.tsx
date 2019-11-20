import { AttributeType, EditCategoryState } from '../../state';

export function createTestState(icon: string): EditCategoryState {
	return {
		name: 'Test Name',
		category: {
			icon,
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

import { Inventory, AttributeType } from '../../state';

export function createTestItem(name: string): Inventory {
	return {
		name,
		id: 'Test ID',
		category: 'Test Category',
		attributes: [
			{
				name: 'Completed',
				value: 'T',
				type: AttributeType.Bool,
			},
			{
				name: 'Info',
				value: 'Test info',
				type: AttributeType.String,
			},
		],
	};
}

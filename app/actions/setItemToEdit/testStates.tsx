import { Inventory, AttributeType } from '../../state';

export function createTestState(id: string): Inventory {
	return {
		name: `name${id}`,
		id,
		category: `category${id}`,
		attributes: [
			{
				name: `aBoolName${id}`,
				value: `aBoolVal${id}`,
				type: AttributeType.Bool,
			},
			{
				name: `aStringName${id}`,
				value: `aStringVal${id}`,
				type: AttributeType.String,
			},
		],
	};
}

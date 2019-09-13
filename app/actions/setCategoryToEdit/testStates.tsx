import { AttributeType, EditCategoryState } from '../../state';

export function createTestState(id: string): EditCategoryState {
	return {
		name: `${id}`,
		category: {
			icon: `icon-${id}`,
			attributes: [
				{
					name: `aBoolName-${id}`,
					value: `aBoolVal-${id}`,
					type: AttributeType.Bool,
				},
				{
					name: `aStringName-${id}`,
					value: `aStringVal-${id}`,
					type: AttributeType.String,
				},
			],
		},
	};
}

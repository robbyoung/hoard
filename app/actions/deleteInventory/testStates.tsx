import { AttributeType, InventoryState } from '../../state';

export function createInventory(
	count: number,
	indexToSkip: number,
): InventoryState {
	const state: InventoryState = [];
	for (let i = 0; i < count; i++) {
		if (i !== indexToSkip) {
			state.push({
				name: `NAME${i}`,
				id: `${i}`,
				category: 'Test Category',
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
			});
		}
	}
	return state;
}

import * as uuid from 'uuid';
import { Inventory, AttributeType, InventoryState } from '../../state';

function createInventory(id: string): Inventory {
	return {
		name: uuid.v4(),
		id,
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
	};
}

export const defaultState: InventoryState = [
	createInventory('id1'),
	createInventory('id2'),
	createInventory('id3'),
	createInventory('id4'),
	createInventory('id5'),
];

export const newItem = createInventory('id6');
export const newItemState: InventoryState = [...defaultState, newItem];

export const editedItem = createInventory('id3');
export const editedInvState: InventoryState = [...defaultState];
editedInvState[2] = editedItem;

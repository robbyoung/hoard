import { InventoryState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { createInventory } from './testStates';
import { DeleteInventoryAction, deleteInventory } from '.';

interface JestMock {
	setItem: () => Promise<void>;
}
jest.mock(
	'@react-native-community/async-storage',
	(): JestMock => {
		return {
			setItem: async (): Promise<void> => undefined,
		};
	},
);

describe('Add Inventory Action', (): void => {
	let state: InventoryState;
	let action: DeleteInventoryAction;

	beforeEach(
		(): void => {
			state = [];
			action = {
				type: ActionType.DeleteInventory,
				itemId: '',
			};
		},
	);

	it('can delete an inventory item', (): void => {
		state = createInventory(5, -1);
		action.itemId = '2';
		const newState = deleteInventory(state, action);
		expect(newState).toEqual(createInventory(5, 2));
		expect(state).toEqual(createInventory(5, -1));
	});

	it('can delete the only inventory item', (): void => {
		state = createInventory(1, -1);
		action.itemId = '0';
		const newState = deleteInventory(state, action);
		expect(newState).toEqual([]);
		expect(state).toEqual(createInventory(1, -1));
	});

	it('will ignore non-existent item IDs', (): void => {
		state = createInventory(3, -1);
		action.itemId = '5';
		const newState = deleteInventory(state, action);
		expect(newState).toEqual(createInventory(3, -1));
		expect(state).toEqual(createInventory(3, -1));
	});
});

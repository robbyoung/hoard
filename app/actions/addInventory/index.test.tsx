import { InventoryState } from '../../state';
import { AddInventoryAction, addInventory } from '../../actions/addInventory';
import { ActionType } from '../../reducers/actions';
import * as testStates from './testStates';

describe('Add Inventory Action', (): void => {
	let state: InventoryState;
	let action: AddInventoryAction;

	beforeEach(
		(): void => {
			state = {
				inventory: testStates.defaultInventory,
			};
			action = {
				type: ActionType.AddInventory,
				newItem: testStates.extraItem,
			};
		},
	);

	it('can add a new inventory item', (): void => {
		const newState = addInventory(state, action);
		newState.inventory[newState.inventory.length - 1].id = 'newId';
		expect(newState).toEqual({
			inventory: [...testStates.defaultInventory, testStates.extraItem],
		});
	});

	it('can update an existing inventory item', (): void => {
		action.newItem = testStates.editedItem;
		const newState = addInventory(state, action);
		expect(newState).toEqual({
			inventory: [...testStates.editedInventory],
		});
	});
});

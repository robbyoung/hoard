import { Action } from 'redux';
import { InventoryState } from '../../state';
import testInventory from './testInventory';
import reducer from './index';

const DEFAULT_TEST_STATE: InventoryState = testInventory;

describe('Inventory Reducer', (): void => {
	let state: InventoryState | undefined;
	let action: Action;

	beforeEach(
		(): void => {
			state = DEFAULT_TEST_STATE;
			action = {
				type: undefined,
			};
		},
	);

	it('has a default state if none is passed in', (): void => {
		state = undefined;
		const newState = reducer(state, action);
		expect(newState).toEqual(testInventory);
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});
});

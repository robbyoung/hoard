import { Action } from 'redux';
import { InventoryState } from '../../state';
import { ActionType } from '../actions';
import { JestMock } from '../../aliases';
import testInventory from './testInventory';
import reducer from './index';

jest.mock(
	'@react-native-community/async-storage',
	(): JestMock => {
		return {
			setItem: async (): Promise<void> => undefined,
		};
	},
);

describe('Inventory Reducer', (): void => {
	let state: InventoryState | undefined;
	let action: Action;

	beforeEach(
		(): void => {
			state = testInventory;
			action = {
				type: undefined,
			};
		},
	);

	it('has a default state if none is passed in', (): void => {
		state = undefined;
		const newState = reducer(state, action);
		expect(newState).toEqual([]);
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(testInventory);
	});

	it('can handle state loaded from storage', (): void => {
		const action = {
			type: ActionType.LoadInventory,
			state: [],
		};
		const newState = reducer(state, action);
		expect(newState).toEqual([]);
	});
});

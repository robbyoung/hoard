import { Action } from 'redux';
import { CategoriesState } from '../../state';
import { ActionType } from '../actions';
import { JestMock } from '../../aliases';
import testCategories from './testCategories';
import reducer from './index';

jest.mock(
	'@react-native-community/async-storage',
	(): JestMock => {
		return {
			setItem: async (): Promise<void> => undefined,
		};
	},
);

describe('Categories Reducer', (): void => {
	let state: CategoriesState | undefined;
	let action: Action;

	beforeEach(
		(): void => {
			state = testCategories;
			action = {
				type: undefined,
			};
		},
	);

	it('has a default state if none is passed in', (): void => {
		state = undefined;
		const newState = reducer(state, action);
		expect(newState).toEqual({});
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(testCategories);
	});

	it('can handle state loaded from storage', (): void => {
		const action = {
			type: ActionType.LoadCategories,
			state: {},
		};
		const newState = reducer(state, action);
		expect(newState).toEqual({});
	});
});

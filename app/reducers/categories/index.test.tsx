import { Action } from 'redux';
import { CategoriesState } from '../../state';
import testCategories from './testCategories';
import reducer from './index';

const DEFAULT_TEST_STATE: CategoriesState = testCategories;

describe('Categories Reducer', (): void => {
	let state: CategoriesState | undefined;
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
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});
});

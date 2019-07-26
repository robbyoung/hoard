import { Action } from 'redux';
import { StatsState } from '../../state';
import reducer from './index';

const DEFAULT_TEST_STATE = {
	data: [],
	category: 'default',
	attribute: 'default',
	attributeList: [],
};

describe('Stats Reducer', (): void => {
	let state: StatsState | undefined;
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
		expect(newState).toEqual({
			data: [],
			category: 'Book',
			attribute: 'Pick One',
			attributeList: ['Pick One', 'Completed', 'Page Count', 'Series'],
		});
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});
});

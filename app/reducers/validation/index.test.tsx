import { Action } from 'redux';
import { ValidationState } from '../../state';
import reducer from './index';

describe('New Item Reducer', (): void => {
	let state: ValidationState | undefined;
	let action: Action;

	beforeEach(
		(): void => {
			action = {
				type: undefined,
			};
		},
	);

	it('has a default state if none is passed in', (): void => {
		state = undefined;
		const newState = reducer(state, action);
		expect(newState).toEqual('');
	});

	it('will reset state to empty on unrelated actions', (): void => {
		state = 'Not empty';
		const newState = reducer(state, action);
		expect(newState).toEqual('');
	});
});

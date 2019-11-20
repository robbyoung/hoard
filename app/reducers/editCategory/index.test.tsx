import { Action } from 'redux';
import { AttributeType, EditCategoryState } from '../../state';
import reducer, { defaultState } from './index';

const DEFAULT_TEST_STATE: EditCategoryState = {
	name: 'Book',
	category: {
		icon: '',
		attributes: [
			{
				name: 'Completed',
				value: 'False',
				type: AttributeType.Bool,
			},
			{
				name: 'Page Count',
				value: '750',
				type: AttributeType.Number,
			},
			{
				name: 'Series',
				value: 'N/A',
				type: AttributeType.String,
			},
		],
		id: '',
	},
};

describe('Edit Category Reducer', (): void => {
	let state: EditCategoryState | undefined;
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
		expect(newState).toEqual(defaultState);
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});
});

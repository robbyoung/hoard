import { Action } from 'redux';
import { EditItemState, AttributeType } from '../../state';
import reducer from './index';

const DEFAULT_TEST_STATE: EditItemState = {
	id: 'testId',
	name: 'American Gods',
	category: 'Book',
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
};

describe('Edit Item Reducer', (): void => {
	let state: EditItemState | undefined;
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
			id: '',
			name: '',
			category: '',
			attributes: [],
		});
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});
});

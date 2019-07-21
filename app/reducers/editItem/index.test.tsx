import { Action } from 'redux';
import { EditItemState, AttributeType } from '../../state';
import { ActionType } from '../actions';
import { EditItemNameAction } from '../../actions/editItemName';
import { SetItemToEditAction } from '../../actions/setItemToEdit';
import reducer from './index';

const DEFAULT_TEST_STATE: EditItemState = {
	id: 'testId',
	name: 'American Gods',
	category: 'Book',
	attributes: [
		{
			name: 'Completed',
			value: 'F',
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

describe('New Item Reducer', (): void => {
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

	it('can update the new item name', (): void => {
		const newName = 'American Gods (Gaiman)';
		const setNameAction: EditItemNameAction = {
			type: ActionType.EditItemName,
			name: newName,
		};
		const newState = reducer(DEFAULT_TEST_STATE, setNameAction);
		expect(newState.name).toEqual(newName);
	});

	it('will reset the state if instructed to', (): void => {
		action.type = ActionType.SetItemToEdit;
		const newState = reducer(DEFAULT_TEST_STATE, action);
		expect(newState).toEqual({
			id: '',
			name: '',
			category: '',
			attributes: [],
		});
	});

	it('can reset the state to edit inventory', (): void => {
		const itemToEdit = {
			id: 'testId2',
			name: 'Dark Souls',
			category: 'Game',
			attributes: [
				{
					name: 'Completed',
					value: 'F',
					type: AttributeType.Bool,
				},
			],
		};
		const resetAction: SetItemToEditAction = {
			type: ActionType.SetItemToEdit,
			newItem: itemToEdit,
		};
		const newState = reducer(DEFAULT_TEST_STATE, resetAction);
		expect(newState).toEqual(itemToEdit);
	});
});

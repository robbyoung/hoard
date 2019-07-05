import { Action } from 'redux';
import { NewItemState, AttributeType } from '../../state';
import { ActionType } from '../actions';
import reducer, {
	SetNewItemNameAction,
	SetNewItemCategoryAction,
	SetNewItemAttributeAction,
	ResetNewItemAction,
} from './index';

const DEFAULT_TEST_STATE: NewItemState = {
	item: {
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
	},
};

describe('New Item Reducer', (): void => {
	let state: NewItemState | undefined;
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
			item: {
				id: '',
				name: '',
				category: '',
				attributes: [],
			},
		});
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});

	it('can update the new item name', (): void => {
		const newName = 'American Gods (Gaiman)';
		const setNameAction: SetNewItemNameAction = {
			type: ActionType.SetNewItemName,
			name: newName,
		};
		const newState = reducer(DEFAULT_TEST_STATE, setNameAction);
		expect(newState.item.name).toEqual(newName);
	});

	it('can update the new item category', (): void => {
		const newCategory = {
			name: 'Fiction',
			attributes: [
				{
					name: 'Author',
					value: 'Neil Gaiman',
					type: AttributeType.Number,
				},
			],
		};
		const setCategoryAction: SetNewItemCategoryAction = {
			type: ActionType.SetNewItemCategory,
			categoryName: newCategory.name,
			attributes: newCategory.attributes,
		};
		const newState = reducer(DEFAULT_TEST_STATE, setCategoryAction);
		expect(newState.item.category).toEqual(newCategory.name);
		expect(newState.item.attributes).toEqual(newCategory.attributes);
	});

	it('can update a new item attribute', (): void => {
		const updatedAttribute = {
			name: 'Completed',
			value: 'T',
			type: AttributeType.Bool,
		};
		const setAttributeAction: SetNewItemAttributeAction = {
			type: ActionType.SetNewItemAttribute,
			attribute: updatedAttribute,
		};
		const newState = reducer(DEFAULT_TEST_STATE, setAttributeAction);
		expect(newState.item.attributes).toEqual([
			{
				name: 'Completed',
				value: 'T',
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
		]);
	});

	it('will reset the state if instructed to', (): void => {
		action.type = ActionType.ResetNewItem;
		const newState = reducer(DEFAULT_TEST_STATE, action);
		expect(newState).toEqual({
			item: {
				id: '',
				name: '',
				category: '',
				attributes: [],
			},
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
		const resetAction: ResetNewItemAction = {
			type: ActionType.ResetNewItem,
			newItem: itemToEdit,
		}
		const newState = reducer(DEFAULT_TEST_STATE, resetAction);
		expect(newState).toEqual({
			item: itemToEdit,
		});
	});
});

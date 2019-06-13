import reducer, { StatsActionType, SetCategoryAction, SetAttributeAction } from './index';
import { StatsState } from '../../state';
import { Action } from 'redux';

const DEFAULT_TEST_STATE = {
	attribute: 'default',
	category: 'default',
};

describe('Stats Reducer', () => {
	let state: StatsState | undefined;
	let action: Action;

	beforeEach(() => {
		state = DEFAULT_TEST_STATE;
		action = {
			type: undefined,
		}
	});

	it('has a default state if none is passed in', () => {
		state = undefined;
		const newState = reducer(state, action);
		expect(newState).toEqual({
			attribute: 'Completed',
			category: 'Book',
		});
	});

	it('can return state unchanged for unrelated actions', () => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});

	it('can update the stats category', () => {
		const newCategory = 'new category';
		const setCategoryAction: SetCategoryAction = {
			type: StatsActionType.SetCategory,
			category: newCategory,
		};
		const newState = reducer(state, setCategoryAction);
		expect(newState).toEqual({
			attribute: DEFAULT_TEST_STATE.attribute,
			category: newCategory,
		});
	});

	it('can update the stats attribute', () => {
		const newAttribute = 'new attribute';
		const setAttributeAction: SetAttributeAction = {
			type: StatsActionType.SetAttribute,
			attribute: newAttribute,
		};
		const newState = reducer(state, setAttributeAction);
		expect(newState).toEqual({
			attribute: newAttribute,
			category: DEFAULT_TEST_STATE.category,
		});
	});
});
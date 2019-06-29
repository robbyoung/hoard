import reducer, { SetCategoryAction, SetAttributeAction } from './index';
import { StatsState } from '../../state';
import { Action } from 'redux';
import { ActionType } from '../actions';

const DEFAULT_TEST_STATE = {
	attribute: 'default',
	category: 'default',
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
			attribute: 'Completed',
			category: 'Book',
		});
	});

	it('can return state unchanged for unrelated actions', (): void => {
		const newState = reducer(state, action);
		expect(newState).toEqual(DEFAULT_TEST_STATE);
	});

	it('can update the stats category', (): void => {
		const newCategory = 'new category';
		const setCategoryAction: SetCategoryAction = {
			type: ActionType.SetStatsCategory,
			category: newCategory,
		};
		const newState = reducer(state, setCategoryAction);
		expect(newState).toEqual({
			attribute: DEFAULT_TEST_STATE.attribute,
			category: newCategory,
		});
	});

	it('can update the stats attribute', (): void => {
		const newAttribute = 'new attribute';
		const setAttributeAction: SetAttributeAction = {
			type: ActionType.SetStatsAttribute,
			attribute: newAttribute,
		};
		const newState = reducer(state, setAttributeAction);
		expect(newState).toEqual({
			attribute: newAttribute,
			category: DEFAULT_TEST_STATE.category,
		});
	});
});

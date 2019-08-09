import { StatsState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { SetStatsCategoryAction, setStatsCategory } from '.';
import { blankState, testAttributes, categoryState } from './testStates';

describe('Set Stats Category', (): void => {
	let state: StatsState = blankState;
	let action: SetStatsCategoryAction = {
		type: ActionType.SetStatsCategory,
		category: 'category',
		attributes: testAttributes,
	};

	it('can set the category of a stats display', (): void => {
		const newState = setStatsCategory(action, state);
		expect(newState).toEqual(categoryState);
		expect(state).toEqual(blankState);
		state = newState;
	});

	it('can unset the category of a stats display', (): void => {
		action.category = 'Pick One';
		const newState = setStatsCategory(action, state);
		expect(newState).toEqual(blankState);
		expect(state).toEqual(categoryState);
	});
});

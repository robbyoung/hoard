import { StatsState } from '../../state';
import { ActionType } from '../../reducers/actions';
import {
	createTestInventory,
	attributeState,
	grouperState,
	blankState,
} from './testStates';
import { SetStatsAttributeAction, setStatsAttribute } from '.';

describe('Set Stats Attribute', (): void => {
	let state: StatsState = blankState;
	const action: SetStatsAttributeAction = {
		type: ActionType.SetStatsAttribute,
		inventory: createTestInventory(),
		attribute: 'Pick One',
		grouper: 'None',
	};

	it('can set the attribute of a stats display', (): void => {
		action.attribute = 'bool';
		const newState = setStatsAttribute(action, state);
		expect(newState).toEqual(attributeState);
		expect(state).toEqual(blankState);
		state = newState;
	});

	it('can set the grouper of a stats display', (): void => {
		action.grouper = 'number';
		const newState = setStatsAttribute(action, state);
		expect(newState).toEqual(grouperState);
		expect(state).toEqual(attributeState);
		state = newState;
	});

	it('can unset the grouper of a stats display', (): void => {
		action.grouper = 'None';
		const newState = setStatsAttribute(action, state);
		expect(newState).toEqual(attributeState);
		expect(state).toEqual(grouperState);
		state = newState;
	});

	it('can unset the attribute of a stats display', (): void => {
		action.attribute = 'Pick One';
		const newState = setStatsAttribute(action, state);
		expect(newState).toEqual(blankState);
		expect(state).toEqual(attributeState);
	});
});

import { EditItemState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { createState, createAttributes, createAttribute } from './testStates';
import { EditItemAttributeAction, editItemAttribute } from '.';

describe('Edit Item Attribute', (): void => {
	let state: EditItemState;
	const action: EditItemAttributeAction = {
		type: ActionType.EditItemAttribute,
		attribute: createAttribute(0, 'Edited'),
	};

	it('can update a single-attribute item', (): void => {
		state = createState(createAttributes(1));
		action.attribute = createAttribute(0, 'Edited');

		const newState = editItemAttribute(state, action);
		const expectedState = createState(createAttributes(1));
		expectedState.attributes[0] = action.attribute;
		expect(newState).toEqual(expectedState);
		expect(state).toEqual(createState(createAttributes(1)));
	});

	it('can update a multi-attribute item', (): void => {
		state = createState(createAttributes(10));
		action.attribute = createAttribute(2, 'Edited');

		const newState = editItemAttribute(state, action);
		const expectedState = createState(createAttributes(10));
		expectedState.attributes[2] = action.attribute;
		expect(newState).toEqual(expectedState);
		expect(state).toEqual(createState(createAttributes(10)));
	});
});

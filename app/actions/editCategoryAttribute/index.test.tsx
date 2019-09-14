import { ActionType } from '../../reducers/actions';
import { createTestState, createAlteredAttribute } from './testStates';
import { EditCategoryAttributeAction, editCategoryAttribute } from '.';

function runTest(attributeCount: number, indexToChange: number): void {
	const oldState = createTestState(attributeCount);
	const action: EditCategoryAttributeAction = {
		type: ActionType.EditCategoryAttribute,
		attribute: createAlteredAttribute(indexToChange),
	};
	const newState = editCategoryAttribute(oldState, action);
	expect(newState).toEqual(createTestState(attributeCount, indexToChange));
	expect(oldState).toEqual(createTestState(attributeCount));
}

describe('Edit Category Attribute', (): void => {
	it('Can add a new attribute to an empty category', () => {
		runTest(0, 0);
	});

	it('Can add a new attribute to a populated category', () => {
		runTest(3, 3);
	});

	it('Can edit the only attribute on a category', () => {
		runTest(1, 0);
	});

	it('Can edit one of many attributes on a category', () => {
		runTest(15, 5);
	});
});

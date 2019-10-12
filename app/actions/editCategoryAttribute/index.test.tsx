import { ActionType } from '../../reducers/actions';
import { createTestState, createAlteredAttribute } from './testStates';
import { EditCategoryAttributeAction, editCategoryAttribute } from '.';

function runTest(
	attributeCount: number,
	indexToChange: number,
	deleteAttribute: boolean,
): void {
	const oldState = createTestState(attributeCount);
	const action: EditCategoryAttributeAction = {
		type: ActionType.EditCategoryAttribute,
		attribute: createAlteredAttribute(indexToChange),
		delete: deleteAttribute,
	};
	const newState = editCategoryAttribute(oldState, action);
	const deleteIndex = deleteAttribute ? indexToChange : -1;
	expect(newState).toEqual(
		createTestState(attributeCount, indexToChange, deleteIndex),
	);
	expect(oldState).toEqual(createTestState(attributeCount));
}

describe('Edit Category Attribute', (): void => {
	it('Can add a new attribute to an empty category', () => {
		runTest(0, 0, false);
	});

	it('Can add a new attribute to a populated category', () => {
		runTest(3, 3, false);
	});

	it('Can edit the only attribute on a category', () => {
		runTest(1, 0, false);
	});

	it('Can edit one of many attributes on a category', () => {
		runTest(15, 5, false);
	});

	it('Can delete the only attribute on a category', () => {
		runTest(0, 0, true);
	});

	it('Can delete one of many attributes on a category', () => {
		runTest(15, 5, true);
	});
});

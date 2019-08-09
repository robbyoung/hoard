import _ from 'lodash';
import { Inventory, AttributeType } from '../../state';

export function createTestInventory(): Inventory[] {
	return _.range(10).map(
		(i): Inventory => {
			return {
				name: `Name${i}`,
				id: `ID${i}`,
				category: 'category',
				attributes: [
					{
						name: 'bool',
						value: i % 2 == 0 ? 'T' : 'F',
						type: AttributeType.Bool,
					},
					{
						name: 'number',
						value: i % 2 == 0 ? '1' : '2',
						type: AttributeType.Number,
					},
				],
			};
		},
	);
}

export const blankState = {
	data: [],
	category: 'category',
	categoryList: ['Pick One', 'category'],
	attribute: 'Pick One',
	attributeList: ['Pick One', 'bool'],
	grouper: 'None',
	grouperList: ['None', 'number'],
};

export const attributeState = {
	data: [
		{ key: 'T', count: 5, percentage: 50, colour: '#db5353' },
		{ key: 'F', count: 5, percentage: 50, colour: '#2f69c6' },
	],
	category: 'category',
	categoryList: ['Pick One', 'category'],
	attribute: 'bool',
	attributeList: ['Pick One', 'bool'],
	grouper: 'None',
	grouperList: ['None', 'number'],
};

export const grouperState = {
	data: [
		{ key: 'T', count: 5, percentage: 33.33, colour: '#db5353' },
		{ key: 'F', count: 10, percentage: 66.67, colour: '#2f69c6' },
	],
	category: 'category',
	categoryList: ['Pick One', 'category'],
	attribute: 'bool',
	attributeList: ['Pick One', 'bool'],
	grouper: 'number',
	grouperList: ['None', 'number'],
};

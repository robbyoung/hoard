import _ from 'lodash';
import { Inventory, AttributeType } from '../../state';

export function createTestInventory(): Inventory[] {
	return _.range(10).map(
		(i: number): Inventory => {
			return {
				name: `Name${i}`,
				id: `ID${i}`,
				category: 'category',
				attributes: [
					{
						name: 'bool',
						value: i % 2 == 0 ? 'True' : 'False',
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
	categoryList: ['category'],
	attribute: '',
	attributeList: ['bool'],
	grouper: 'None',
	grouperList: ['None', 'number'],
};

export const attributeState = {
	data: [
		{ key: 'True', count: 5, percentage: 50, colour: '#db5353' },
		{ key: 'False', count: 5, percentage: 50, colour: '#2f69c6' },
	],
	category: 'category',
	categoryList: ['category'],
	attribute: 'bool',
	attributeList: ['bool'],
	grouper: 'None',
	grouperList: ['None', 'number'],
};

export const grouperState = {
	data: [
		{ key: 'True', count: 5, percentage: 33.33, colour: '#db5353' },
		{ key: 'False', count: 10, percentage: 66.67, colour: '#2f69c6' },
	],
	category: 'category',
	categoryList: ['category'],
	attribute: 'bool',
	attributeList: ['bool'],
	grouper: 'number',
	grouperList: ['None', 'number'],
};

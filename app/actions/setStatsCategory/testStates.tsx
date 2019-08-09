import { AttributeType, Attribute } from '../../state';

export const testAttributes: Attribute[] = [
	{
		name: 'bool',
		value: '',
		type: AttributeType.Bool,
	},
	{
		name: 'number',
		value: '',
		type: AttributeType.Number,
	},
	{
		name: 'combo',
		value: '',
		type: AttributeType.Combo,
	},
];

export const blankState = {
	data: [],
	category: 'Pick One',
	categoryList: ['Pick One', 'category'],
	attribute: 'Pick One',
	attributeList: ['Pick One'],
	grouper: 'None',
	grouperList: ['None'],
};

export const categoryState = {
	data: [],
	category: 'category',
	categoryList: ['Pick One', 'category'],
	attribute: 'Pick One',
	attributeList: ['Pick One', 'bool', 'combo'],
	grouper: 'None',
	grouperList: ['None', 'number'],
};

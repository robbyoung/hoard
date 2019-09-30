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
	category: '',
	categoryList: ['category'],
	attribute: '',
	attributeList: [],
	grouper: 'None',
	grouperList: ['None'],
};

export const categoryState = {
	data: [],
	category: 'category',
	categoryList: ['category'],
	attribute: '',
	attributeList: ['bool', 'combo'],
	grouper: 'None',
	grouperList: ['None', 'number'],
};

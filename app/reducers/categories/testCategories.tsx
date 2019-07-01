import { AttributeType } from '../../state';

export default {
	Game: [
		{
			name: 'Completed',
			value: 'T',
			type: AttributeType.Bool,
		},
	],
	Book: [
		{
			name: 'Completed',
			value: 'T',
			type: AttributeType.Bool,
		},
		{
			name: 'Page Count',
			value: 'N/A',
			type: AttributeType.Number,
		},
		{
			name: 'Series',
			value: 'N/A',
			type: AttributeType.String,
		},
	],
};

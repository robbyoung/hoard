import { Icons } from 'react-native-fontawesome';
import { AttributeType } from '../../state';

export default {
	Game: {
		icon: Icons.gamepad,
		attributes: [
			{
				name: 'Completed',
				value: 'True',
				type: AttributeType.Bool,
			},
		],
	},
	Book: {
		icon: Icons.book,
		attributes: [
			{
				name: 'Completed',
				value: 'True',
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
	},
};

import React, { Component } from 'react';
import { Picker, View, Text, StyleSheet } from 'react-native';
import { white, darkColor, black } from '../../styles';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 5,
	},
	title: {
		textAlign: 'right',
		fontSize: 22,
		fontWeight: 'bold',
		width: '30%',
		marginRight: 3,
		color: darkColor,
	},
	picker: {
		width: '70%',
		height: 30,
		fontSize: 22,
		marginLeft: 3,
	},
});

interface StatsPickerProps {
	title: string;
	selected: string;
	choices: string[];
	enabled: boolean;
	onSelect: (attribute: string) => void;
}
export default class StatsPicker extends Component<StatsPickerProps> {
	public render(): JSX.Element {
		if (!this.props.enabled) {
			return <View></View>;
		}

		const attributes = this.props.choices.map(
			(attr: string): Element => (
				<Picker.Item label={attr} value={attr} key={attr} />
			),
		);
		return (
			<View style={styles.row}>
				<Text style={styles.title}>{this.props.title}</Text>
				<Picker
					style={styles.picker}
					selectedValue={this.props.selected}
					onValueChange={this.props.onSelect}>
					{attributes}
				</Picker>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import { white, darkColor, lightColor, black } from '../styles';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const SELECT_CATEGORY_TEXT = 'Pick One';

export const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		margin: 5,
		padding: 5,
		backgroundColor: lightColor,
		borderRadius: 5,
	},
	title: {
		textAlign: 'right',
		fontSize: 22,
		fontWeight: 'bold',
		width: '50%',
		marginRight: 3,
		color: black,
	},
	pickerContainer: {
		backgroundColor: white,
		width: '48%',
		marginLeft: 5,
	},
	picker: {
		height: 30,
		fontSize: 22,
	},
	chevron: {
		height: 30,
		paddingRight: 10,
		paddingTop: 5,
		fontSize: 22,
		backgroundColor: white,
	}
});

interface HoardPickerProps {
	title: string;
	items: string[];
	selected?: string;
	defaultText?: string;
	error?: string;
	onSelect: (s: string) => void;
}
export default class HoardPicker extends Component<
	HoardPickerProps
> {
	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={styles.pickerContainer}>
				<Picker
					style={styles.picker}
					selectedValue={this.props.selected}
					onValueChange={(value: string): void => this.props.onSelect(value)}
				>
					<Picker.Item
						label={SELECT_CATEGORY_TEXT}
						value={SELECT_CATEGORY_TEXT}
						key={-1}
					/>
					{this.getPickerItems()}
				</Picker>
				</View>
			</View>
		);
	}

	private getPickerItems(): JSX.Element[] {
		return this.props.items.map(
			(name: string, i: number): JSX.Element => (
				<Picker.Item label={name} value={name} key={i} />
			),
		);
	}
}

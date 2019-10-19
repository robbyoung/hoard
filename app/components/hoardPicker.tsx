import React, { Component } from 'react';
import { View, Picker, Text, StyleSheet } from 'react-native';
import { white, lightColor, black } from '../styles';

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
});

interface HoardPickerProps {
	title: string;
	items: string[];
	defaultText?: string;
	selected?: string;
	hidden?: boolean;
	onSelect: (s: string) => void;
}
export default class HoardPicker extends Component<HoardPickerProps> {
	public render(): JSX.Element {
		if (this.props.hidden) {
			return <View />;
		}
		return (
			<View style={styles.row}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={styles.pickerContainer}>
					<Picker
						style={styles.picker}
						selectedValue={this.props.selected}
						onValueChange={(value: string): void => {
							if (value === this.props.defaultText) {
								value = '';
							}
							this.props.onSelect(value);
						}}>
						{this.getPickerItems()}
					</Picker>
				</View>
			</View>
		);
	}

	private getPickerItems(): JSX.Element[] {
		let pickerItems = this.props.items.map(
			(name: string, i: number): JSX.Element => (
				<Picker.Item label={name} value={name} key={i} />
			),
		);

		const name = this.props.defaultText;
		if (name !== undefined && !this.props.selected) {
			pickerItems = [
				<Picker.Item label={name} value={name} key={-1} />,
				...pickerItems,
			];
		}

		return pickerItems;
	}
}

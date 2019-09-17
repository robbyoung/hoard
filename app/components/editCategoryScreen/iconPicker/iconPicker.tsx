import { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-fontawesome';
import { darkColor } from '../../../styles';
import { availableIcons } from './availableIcons';

export const styles = StyleSheet.create({
	table: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	iconContainer: {
		margin: 5,
	},
	icon: {
		fontSize: 35,
	},
	selectedIcon: {
		color: darkColor,
		fontSize: 35,
	},
});

interface IconPickerProps {
	onIconTap: (icon: string) => void;
	selected: string;
}

export default class IconPicker extends Component<IconPickerProps> {
	public render(): JSX.Element {
		return (
			<View>
				<View style={styles.table}>{this.getIconButtons()}</View>
			</View>
		);
	}

	private getIconButtons(): JSX.Element[] {
		return availableIcons.map(
			(icon: string): JSX.Element => {
				return (
					<View key={icon} style={styles.iconContainer}>
						<TouchableOpacity
							onPress={(): void => this.props.onIconTap(icon)}>
							<FontAwesome
								style={
									icon === this.props.selected
										? styles.selectedIcon
										: styles.icon
								}>
								{icon}
							</FontAwesome>
						</TouchableOpacity>
					</View>
				);
			},
		);
	}
}

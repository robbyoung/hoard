import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { darkColor } from '../../../styles';
import FontAwesome from 'react-native-fontawesome';
import { availableIcons } from './availableIcons';


export const styles = StyleSheet.create({
	table: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: '70%',
		height: '70%',
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

interface IconModalProps {
	onIconSelect: (icon: string) => void;
	selected: string;
	isVisible: boolean;
}
export default class IconModal extends Component<IconModalProps> {
	public render(): JSX.Element {
		return (
			<Modal visible={this.props.isVisible}>
				<View style={styles.table}>{this.getIconButtons()}</View>
			</Modal>
		);
	}

	private getIconButtons(): JSX.Element[] {
		return availableIcons.map(
			(icon: string): JSX.Element => {
				return (
					<View key={icon} style={styles.iconContainer}>
						<TouchableOpacity
							onPress={(): void => this.props.onIconSelect(icon)}>
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
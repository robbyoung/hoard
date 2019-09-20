import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { darkColor, white } from '../../../styles';
import FontAwesome from 'react-native-fontawesome';
import { availableIcons } from './availableIcons';


export const styles = StyleSheet.create({
	modal: {
		height: '100%',
		marginTop: '120%',
		padding: '3%',
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: 'space-evenly',
		backgroundColor: white,
		borderTopWidth: 5,
		borderColor: darkColor,
	},
	iconContainer: {
		width: 40,
		margin: 2,
	},
	icon: {
		textAlign: 'center',
		fontSize: 35,
	},
	selectedIcon: {
		color: darkColor,
	},
});

interface IconModalProps {
	onIconSelect: (icon: string) => void;
	closeModal: () => void;
	selected: string;
	isVisible: boolean;
}
export default class IconModal extends Component<IconModalProps> {
	public render(): JSX.Element {
		return (
			<Modal 
			transparent={true}
			visible={this.props.isVisible}
			animated={true}
			onRequestClose={() => this.props.closeModal()}>
				<View style={styles.modal}>{this.getIconButtons()}</View>
			</Modal>
		);
	}

	private getIconButtons(): JSX.Element[] {
		return availableIcons.map(
			(icon: string): JSX.Element => {
				return (
					<View key={icon} style={styles.iconContainer}>
						<TouchableOpacity
							onPress={(): void => {
								this.props.onIconSelect(icon);
								this.props.closeModal();
							}}>
							<FontAwesome
								style={
									icon === this.props.selected
										? [styles.icon, styles.selectedIcon]
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
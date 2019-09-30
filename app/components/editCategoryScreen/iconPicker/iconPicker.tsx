import { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-fontawesome';
import { darkColor } from '../../../styles';
import IconModal from './iconModal';

export const styles = StyleSheet.create({
	iconContainer: {
		width: '15%',
		justifyContent: 'center',
		alignContent: 'center',
	},
	icon: {
		fontSize: 40,
		paddingLeft: 4,
		color: darkColor,
		textAlign: 'center',
	},
});

interface IconPickerProps {
	onIconSelect: (icon: string) => void;
	selectedIcon: string;
}

interface IconPickerState {
	modalVisible: boolean;
}

export default class IconPicker extends Component<
	IconPickerProps,
	IconPickerState
> {
	public state: IconPickerState = {
		modalVisible: false,
	};

	public render(): JSX.Element {
		return (
			<View style={styles.iconContainer}>
				<TouchableOpacity onPress={() => this.toggleIconModal()}>
					<FontAwesome style={styles.icon}>
						{this.props.selectedIcon}
					</FontAwesome>
				</TouchableOpacity>
				<IconModal
					isVisible={this.state.modalVisible}
					onIconSelect={(icon) => this.props.onIconSelect(icon)}
					closeModal={() => this.toggleIconModal()}
					selected={this.props.selectedIcon}
				/>
			</View>
		);
	}

	private toggleIconModal() {
		this.setState({
			modalVisible: !this.state.modalVisible,
		});
	}
}

import { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-fontawesome';
import IconModal from './iconModal';
import { lightColor } from '../../../styles';

export const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
	},
	icon: {
		fontSize: 35,
	},
});

interface IconPickerProps {
	onIconSelect: (icon: string) => void;
	selectedIcon: string;
}

interface IconPickerState {
	modalVisible: boolean;
}

export default class IconPicker extends Component<IconPickerProps, IconPickerState> {
	public state: IconPickerState = {
		modalVisible: false,
	}

	public render(): JSX.Element {
		return (
			<View style={styles.row}>
				<Text>Icon:</Text>
				<TouchableOpacity
					onPress={() => this.toggleIconModal()}>
						<FontAwesome style={styles.icon}>{this.props.selectedIcon}</FontAwesome>
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

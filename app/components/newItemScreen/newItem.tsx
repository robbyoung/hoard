import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import store from '../../store';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
	},
	categoryPicker: {
		width: 100,
		height: 20,
	}
});

export default class NewItem extends Component<NavigationInjectedProps> {
	public static navigationOptions = {
		title: 'New Item',
	};
	public render(): JSX.Element {
		const categories = store.getState().categories;
		const categoryPickerItems = Object.keys(categories).map((name, i) => (
			<Picker.Item label={name} value={name} key={i}></Picker.Item>
		));
		return (
			<View>
				<View style={styles.row}>
					<Text>Category:</Text>
					<Picker style={styles.categoryPicker}>
						{categoryPickerItems}
					</Picker>
				</View>

			</View>
		);
	}
}

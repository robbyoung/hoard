import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

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
		return (
			<View>
				<View style={styles.row}>
					<Text>Category:</Text>
					<Picker style={styles.categoryPicker}
						selectedValue='Book'>
						<Picker.Item label="Book" value="Book"></Picker.Item>
						<Picker.Item label="Game" value="Game"></Picker.Item>
					</Picker>
				</View>

			</View>
		);
	}
}

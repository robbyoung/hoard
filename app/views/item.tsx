import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Item extends Component {
	public static navigationOptions = {
		title: 'Details',
	}
	public render(): JSX.Element {
		return (
			<View>
				<Text>Item Screen</Text>
			</View>
		);
	}
}

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {
	ItemDetailsNavigationParams,
	extractItemDetailsParams,
} from './itemDetails.nav';

export default class ItemDetails extends Component<NavigationInjectedProps> {
	private params: ItemDetailsNavigationParams = extractItemDetailsParams(
		this.props.navigation,
	);
	public static navigationOptions = {
		title: 'Details',
	};
	public render(): JSX.Element {
		return (
			<View>
				<Text>Item Screen for {this.params.item.name} </Text>
			</View>
		);
	}
}

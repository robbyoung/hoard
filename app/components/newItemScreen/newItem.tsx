import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

const styles = StyleSheet.create({});

export default class NewItem extends Component<NavigationInjectedProps> {
	public static navigationOptions = {
		title: 'New Item',
	};

	public render(): JSX.Element {
		return <View />;
	}
}

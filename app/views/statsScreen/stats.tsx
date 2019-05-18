import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {
	StatsNavigationParams,
	extractStatsParams,
} from './stats.nav';

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
});

export default class Stats extends Component<NavigationInjectedProps> {
	private params: StatsNavigationParams = extractStatsParams(
		this.props.navigation,
	);
	private category = this.params.category ? this.params.category : '';
	public static navigationOptions = {
		title: 'Stats',
	};

	public render(): JSX.Element {
		return (
			<View>
				<Text style={styles.title}>Hello there</Text>
				
			</View>
		);
	}
}

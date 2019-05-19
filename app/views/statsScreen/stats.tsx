import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {
	StatsNavigationParams,
	extractStatsParams,
} from './stats.nav';
import Pie from 'react-native-pie';

const CHART_MARGINS = 40;
const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
	chart: {
		margin: CHART_MARGINS,
	}
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
			<View style={styles.chart}>
				<Pie
					radius={Dimensions.get('window').width / 2 - CHART_MARGINS }
					series={[57, 43]}
					colors={['#db5353', '#d3d3d3']}/>
			</View>
			
		);
	}
}

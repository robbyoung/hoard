import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {
	StatsNavigationParams,
	extractStatsParams,
} from './stats.nav';
import { PieChart } from 'react-native-chart-kit';

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
		const data = [
			{ name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
			{ name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
			{ name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
			{ name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
			{ name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
			];
		const chartConfig = {
			backgroundGradientFrom: '#1E2923',
			backgroundGradientTo: '#08130D',
			color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
			strokeWidth: 2 // optional, default 3
		};
		return (
			<View>
				<Text style={styles.title}>Hello there</Text>
				<PieChart
					data={data}
					width={220}
					height={220}
					chartConfig={chartConfig}
					accessor="population"
					backgroundColor="transparent"
					paddingLeft="15"
					absolute
				/>
			</View>
		);
	}
}

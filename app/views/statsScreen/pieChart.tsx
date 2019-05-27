import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pie from 'react-native-pie';

const CHART_MARGINS = 40;
const styles = StyleSheet.create({
	chart: {
		margin: CHART_MARGINS,
	},
	legend: {
		margin: 20,
	},
	legendItem: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		margin: 2,
	},
	legendText: {
		fontSize: 25,
		marginRight: 2,
	},
});

export interface ChartData {
	key: string;
	count: number;
	percentage: number;
	colour: string;
}

export interface PieChartProps {
	data: ChartData[];
}
export default class PieChart extends Component<PieChartProps> {
	public render(): JSX.Element {
		return (
			<View style={styles.chart}>
				<Pie
					radius={Dimensions.get('window').width / 2 - CHART_MARGINS}
					series={this.props.data.map((d): number => d.percentage)}
					colors={this.props.data.map((d): string => d.colour)}
				/>
			</View>
		);
	}
}

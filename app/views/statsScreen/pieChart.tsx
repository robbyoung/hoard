import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Pie from 'react-native-pie';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const CHART_MARGINS = 40;
const styles = StyleSheet.create({
	chart: {
		margin: CHART_MARGINS,
	},
	legend: {
		margin: 20,
	},
	legendItem: {
		flexDirection: "row",
		justifyContent: "space-around",
		margin: 2,
	},
	legendText: {
		fontSize: 25,
		marginRight: 2
	}
});

export interface PieChartData {
	key: string;
	count: number;
	percentage: number;
	colour: string;
}

export interface PieChartProps {
	data: PieChartData[];
}
export default class PieChart extends Component<PieChartProps> {
	public render(): JSX.Element {
		return (
			<View style={styles.chart}>
				<Pie
					radius={Dimensions.get('window').width / 2 - CHART_MARGINS }
					series={this.props.data.map((d) => d.percentage)}
					colors={this.props.data.map((d) => d.colour)}/>
			</View>
		);
	}
}

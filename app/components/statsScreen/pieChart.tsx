import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Pie from 'react-native-pie';
import { ChartData } from '../../state';

const CHART_MARGINS = 20;
const styles = StyleSheet.create({
	chart: {
		margin: CHART_MARGINS,
	},
});

export interface PieChartProps {
	data: ChartData[];
}
export default class PieChart extends Component<PieChartProps> {
	public render(): JSX.Element {
		return (
			<View style={styles.chart}>
				<Pie
					radius={Dimensions.get('window').width / 4}
					series={this.props.data.map((d): number => d.percentage)}
					colors={this.props.data.map((d): string => d.colour)}
				/>
			</View>
		);
	}
}

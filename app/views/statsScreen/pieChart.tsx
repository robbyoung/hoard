import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Pie from 'react-native-pie';

const CHART_MARGINS = 40;
const styles = StyleSheet.create({
	chart: {
		margin: CHART_MARGINS,
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
	private legend = this.props.data.map(
		(data): JSX.Element => (
			<Text key={data}>{data.key}: {data.count} ({Math.round(data.percentage)}%)</Text>
		),
	);
	public render(): JSX.Element {
		return (
			<View style={styles.chart}>
				<Pie
					radius={Dimensions.get('window').width / 2 - CHART_MARGINS }
					series={this.props.data.map((d) => d.percentage)}
					colors={this.props.data.map((d) => d.colour)}/>
				{this.legend}
			</View>
		);
	}
}

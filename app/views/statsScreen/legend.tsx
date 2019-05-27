import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const styles = StyleSheet.create({
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

export interface PieChartData {
	key: string;
	count: number;
	percentage: number;
	colour: string;
}

export interface LegendProps {
	data: PieChartData[];
}
export default class Legend extends Component<LegendProps> {
	public render(): JSX.Element {
		return (
			<View>
				{this.props.data.map(
					(data): JSX.Element => (
						<View key={data.key} style={styles.legendItem}>
							<FontAwesome
								style={{
									color: data.colour,
									fontSize: 24,
									paddingTop: 5,
								}}>
								{Icons.circle}
							</FontAwesome>
							<Text style={styles.legendText}>{data.key}</Text>
							<Text style={styles.legendText}>{data.count}</Text>
							<Text style={styles.legendText}>
								({Math.round(data.percentage)}%)
							</Text>
						</View>
					),
				)}
			</View>
		);
	}
}

import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import store from '../../store';
import { black } from '../../styles';

const styles = StyleSheet.create({
	legend: {
		width: '50%',
		justifyContent: 'center',
	},
	legendItem: {
		flexDirection: 'row',
		marginBottom: 5,
	},
	legendText: {
		fontSize: 22,
		marginLeft: 2,
		color: black,
		flexWrap: 'wrap',
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
			<View style={styles.legend}>
				{this.props.data.map(
					(data: PieChartData): JSX.Element => (
						<TouchableOpacity
							key={data.key}
							onPress={(): void => this.showDetails(data)}>
							<View style={styles.legendItem}>
								<FontAwesome
									style={{
										color: data.colour,
										fontSize: 22,
										paddingTop: 5,
									}}>
									{Icons.circle}
								</FontAwesome>
								<Text style={styles.legendText}>
									{data.key}
								</Text>
							</View>
						</TouchableOpacity>
					),
				)}
			</View>
		);
	}

	private showDetails(data: PieChartData): void {
		const state = store.getState().stats;
		const category = state.category;
		const attribute = state.attribute;
		const grouper = state.grouper;
		const units = grouper === 'None' ? 'Items' : grouper;
		Alert.alert(
			`${attribute} = ${data.key}`,
			`${data.count} ${units}\n${data.percentage}% of ${category}s`,
			[{ text: 'OK' }],
			{ cancelable: true },
		);
	}
}

import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {
	StatsNavigationParams,
	extractStatsParams,
} from './stats.nav';
import { testInventory } from '../../data/testInventory';
import PieChart, { PieChartData } from './pieChart';

const COLOURS = ['#db5353', '#2f69c6', '#27b239', '#dde02f'];

function getDataForChart(category: string = "All", attribute: string | undefined): PieChartData[] {
	const items = testInventory.filter((item) => category === 'All' || category === item.category);
	if (attribute === undefined) {
		attribute = items[0].attributes[0].key;
	}
	const tally: { [id: string]: number; } = {}
	for (const item of items) {
		const match = item.attributes.find((a) => a.key === attribute);
		const value = match ? match.value : 'Unknown';
		if (tally[value]) {
			tally[value]++;
		} else {
			tally[value] = 1;
		}
	}
	
	const data: PieChartData[] = [];
	let colourIndex = 0;
	for (const key in tally) {
		data.push({
			key,
			count: tally[key],
			percentage: tally[key] / items.length * 100,
			colour: COLOURS[colourIndex],
		});
		colourIndex++;
	}
	return data;
}

export default class Stats extends Component<NavigationInjectedProps> {
	private params: StatsNavigationParams = extractStatsParams(
		this.props.navigation,
	);
	public static navigationOptions = {
		title: 'Stats',
	};

	public render(): JSX.Element {	
		return (
			<View>
				<PieChart data={getDataForChart(this.params.category, undefined)}/>
			</View>
			
		);
	}
}

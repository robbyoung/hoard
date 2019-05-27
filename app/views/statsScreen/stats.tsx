import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { StatsNavigationParams, extractStatsParams } from './stats.nav';
import { testInventory } from '../../data/testInventory';
import PieChart, { PieChartData } from './pieChart';
import AttributePicker from './attributePicker';
import Legend from './legend';
import { getColourForWedgeIndex } from '../../utils/colourHelpers';
import { ScrollView } from 'react-native-gesture-handler';

function getDataForChart(
	category: string,
	attribute: string | undefined,
): PieChartData[] {
	const items = testInventory.filter(
		(item): boolean => category === item.category,
	);
	if (attribute === undefined) {
		attribute = items[0].attributes[0].key;
	}
	const tally: { [id: string]: number } = {};
	for (const item of items) {
		const match = item.attributes.find((a): boolean => a.key === attribute);
		const value = match ? match.value : 'Unknown';
		if (tally[value]) {
			tally[value]++;
		} else {
			tally[value] = 1;
		}
	}

	const data: PieChartData[] = [];
	let wedgeIndex = 0;
	for (const key in tally) {
		data.push({
			key,
			count: tally[key],
			percentage: (tally[key] / items.length) * 100,
			colour: getColourForWedgeIndex(wedgeIndex),
		});
		wedgeIndex++;
	}
	return data;
}

interface StatsState {
	data: PieChartData[];
	attribute: string;
}
export default class Stats extends Component<
	NavigationInjectedProps,
	StatsState
> {
	private params: StatsNavigationParams = extractStatsParams(
		this.props.navigation,
	);
	public state = {
		data: getDataForChart(this.params.category, undefined),
		attribute: 'Completed',
	};
	public static navigationOptions = {
		title: 'Stats',
	};

	public render(): JSX.Element {
		return (
			<View>
				<ScrollView>
					<AttributePicker
						selected={this.state.attribute}
						attributeList={['Completed', 'Page Count', 'Series']}
						onSelect={(attribute: string): void => {
							this.setState({
								attribute,
								data: getDataForChart(
									this.params.category,
									attribute,
								),
							});
						}}
					/>
					<PieChart data={this.state.data} />
					<Legend data={this.state.data} />
				</ScrollView>
			</View>
		);
	}
}

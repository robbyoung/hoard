import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import { StatsNavigationParams, extractStatsParams } from './stats.nav';
import PieChart from './pieChart';
import AttributePicker from './attributePicker';
import Legend from './legend';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../../store';
import { getColourForWedgeIndex } from '../../utils/colourHelpers';
import { ActionType } from '../../reducers/actions';

function getDataForChart(): StatsState {
	const state = store.getState();
	const category = state.stats.category;
	const attribute = state.stats.attribute;

	const items = state.inventory.inventory.filter(
		(item): boolean => category === item.category,
	);
	const tally: { [id: string]: number } = {};
	for (const item of items) {
		const match = item.attributes.find((a): boolean => a.name === attribute);
		const value = match ? match.value : 'Unknown';
		if (tally[value]) {
			tally[value]++;
		} else {
			tally[value] = 1;
		}
	}

	const data: ChartData[] = [];
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
	return {
		data,
		category,
		attribute,
	};
}

export interface ChartData {
	key: string;
	count: number;
	percentage: number;
	colour: string;
}

interface StatsState {
	data: ChartData[];
	category: string;
	attribute: string;
}

export default class Stats extends Component<
	NavigationInjectedProps,
	StatsState
> {
	private params: StatsNavigationParams = extractStatsParams(
		this.props.navigation,
	);
	public state = getDataForChart();
	public static navigationOptions = {
		title: 'Stats',
	};

	public render(): JSX.Element {
		store.subscribe((): void => this.setState(getDataForChart()));
		return (
			<View>
				<ScrollView>
					<AttributePicker
						selected={this.state.attribute}
						attributeList={['Completed', 'Page Count', 'Series']}
						onSelect={(attribute: string): void => {
							store.dispatch({
								type: ActionType.SetStatsAttribute,
								attribute,
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

import React, { Component } from 'react';
import { View } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { Unsubscribe } from 'redux';
import createHeader from '../overviewScreen/headerIcons';

import store from '../../store';
import { ActionType } from '../../reducers/actions';
import PieChart from './pieChart';
import AttributePicker from './attributePicker';
import Legend from './legend';

const CHART_COLOURS: string[] = [
	'#db5353', // red
	'#2f69c6', // blue
	'#27b239', // green
	'#dde02f', // yellow
	'#e2a618', // orange
	'#b02ab2', // purple
	'#8e8e8e', // grey
	'#4ed3d3', // teal
	'#000000', // black
];

function getColourForWedgeIndex(index: number): string {
	return CHART_COLOURS[index % CHART_COLOURS.length];
}

function getDataForChart(): StatsState {
	const state = store.getState();
	const category = state.stats.category;
	const attribute = state.stats.attribute;

	const items = state.inventory.filter(
		(item): boolean => category === item.category,
	);
	const tally: { [id: string]: number } = {};
	for (const item of items) {
		const match = item.attributes.find(
			(a): boolean => a.name === attribute,
		);
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
	private unsubscribe: Unsubscribe = (): void => undefined;

	public state = getDataForChart();
	public static navigationOptions = (): NavigationStackScreenOptions => {
		return createHeader('Stats', []);
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe(
			(): void => this.setState(getDataForChart()),
		);
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
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

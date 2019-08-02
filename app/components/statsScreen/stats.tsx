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
import { StatsState } from '../../state';
import { SetAttributeAction } from '../../actions/setStatsAttribute';
import PieChart from './pieChart';
import StatsPicker from './statsPicker';
import Legend from './legend';

export default class Stats extends Component<
	NavigationInjectedProps,
	StatsState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions = (): NavigationStackScreenOptions => {
		return createHeader('Stats', []);
	};

	public state = store.getState().stats;

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe(
			(): void => this.setState(store.getState().stats),
		);
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return (
			<View>
				<ScrollView>
				<StatsPicker
						title={"Category:"}
						selected={this.state.category}
						attributeList={this.state.categoryList}
						onSelect={(attribute: string): void => {
							const action: SetAttributeAction = {
								type: ActionType.SetStatsAttribute,
								attribute,
								inventory: store.getState().inventory,
							};
							store.dispatch(action);
						}}
					/>
					<StatsPicker
						title={"Attribute:"}
						selected={this.state.attribute}
						attributeList={this.state.attributeList}
						onSelect={(attribute: string): void => {
							const action: SetAttributeAction = {
								type: ActionType.SetStatsAttribute,
								attribute,
								inventory: store.getState().inventory,
							};
							store.dispatch(action);
						}}
					/>
					<StatsPicker
						title={"Group By:"}
						selected={this.state.grouper}
						attributeList={this.state.grouperList}
						onSelect={(attribute: string): void => {
							const action: SetAttributeAction = {
								type: ActionType.SetStatsAttribute,
								attribute,
								inventory: store.getState().inventory,
							};
							store.dispatch(action);
						}}
					/>
					<PieChart data={this.state.data} />
					<Legend data={this.state.data} />
				</ScrollView>
			</View>
		);
	}
}

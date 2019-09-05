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
import { SetStatsAttributeAction } from '../../actions/setStatsAttribute';
import { SetStatsCategoryAction } from '../../actions/setStatsCategory';
import { NavigationOptions } from '../../aliases';
import PieChart from './pieChart';
import StatsPicker from './statsPicker';
import Legend from './legend';

export default class Stats extends Component<
	NavigationInjectedProps,
	StatsState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions: NavigationOptions = (): NavigationStackScreenOptions => {
		return createHeader('Stats', []);
	};

	public state: StatsState = store.getState().stats;

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
						title={'Category:'}
						enabled={true}
						selected={this.state.category}
						choices={this.state.categoryList}
						onSelect={(category: string): void => {
							const action: SetStatsCategoryAction = {
								type: ActionType.SetStatsCategory,
								category,
								attributes: store.getState().categories[
									category
								].attributes,
							};
							store.dispatch(action);
						}}
					/>
					<StatsPicker
						title={'Attribute:'}
						enabled={this.state.attributeList.length > 1}
						selected={this.state.attribute}
						choices={this.state.attributeList}
						onSelect={(attribute: string): void => {
							const action: SetStatsAttributeAction = {
								type: ActionType.SetStatsAttribute,
								attribute,
								grouper: 'None',
								inventory: store.getState().inventory,
							};
							store.dispatch(action);
						}}
					/>
					<StatsPicker
						title={'Group By:'}
						enabled={
							this.state.attribute != 'Pick One' &&
							this.state.grouperList.length > 1
						}
						selected={this.state.grouper}
						choices={this.state.grouperList}
						onSelect={(grouper: string): void => {
							const action: SetStatsAttributeAction = {
								type: ActionType.SetStatsAttribute,
								attribute: this.state.attribute,
								grouper,
								inventory: store.getState().inventory,
							};
							store.dispatch(action);
						}}
					/>
					<View style={{ flexDirection: 'row' }}>
						<PieChart data={this.state.data} />
						<Legend data={this.state.data} />
					</View>
				</ScrollView>
			</View>
		);
	}
}

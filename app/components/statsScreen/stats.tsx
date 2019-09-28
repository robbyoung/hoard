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
import HoardPicker from '../hoardPicker';
import PieChart from './pieChart';
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
					<HoardPicker
						title={'Category:'}
						selected={this.state.category}
						items={this.state.categoryList}
						defaultText="Pick One"
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
					<HoardPicker
						title={'Attribute:'}
						hidden={this.state.attributeList.length === 0}
						selected={this.state.attribute}
						items={this.state.attributeList}
						defaultText="Pick One"
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
					<HoardPicker
						title={'Group By:'}
						hidden={
							!this.state.attribute ||
							this.state.grouperList.length <= 1
						}
						selected={this.state.grouper}
						items={this.state.grouperList}
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

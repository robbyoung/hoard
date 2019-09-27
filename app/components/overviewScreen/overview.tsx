import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Unsubscribe } from 'redux';
import { Icons } from 'react-native-fontawesome';
import { Screens } from '../../screens';
import { ActionType } from '../../reducers/actions';
import store from '../../store';
import { lightColor } from '../../styles';
import { Inventory } from '../../state';
import { NavigationOptionsWithProps } from '../../aliases';
import OverviewItem from './overviewItem';
import createHeader from './headerIcons';
import HoardPicker from '../HoardPicker';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: lightColor,
	},
});

interface OverviewState {
	inventoryList: JSX.Element[];
}
export default class Overview extends Component<
	NavigationInjectedProps,
	OverviewState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions: NavigationOptionsWithProps = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return createHeader('My Stuff', [
			{
				icon: Icons.chartPie,
				callback: (): void => {
					props.navigation.navigate(Screens.Stats);
				},
			},
			{
				icon: Icons.plusCircle,
				callback: (): void => {
					store.dispatch({
						type: ActionType.SetItemToEdit,
					});
					props.navigation.navigate(Screens.EditItem);
				},
			},
		]);
	};

	public state: OverviewState = {
		inventoryList: this.getInventoryList(),
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe(
			(): void =>
				this.setState({
					inventoryList: this.getInventoryList(),
				}),
		);
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return (
			<HoardPicker
				items={[
					'one',
					'two',
					'three',
					'four'
				]}
				title='Test Picker:'
				onSelect={(s: string) => undefined}
			></HoardPicker>
			// <View style={styles.overview}>
			// 	<ScrollView>{this.state.inventoryList}</ScrollView>
			// </View>
		);
	}

	private getInventoryList(): JSX.Element[] {
		return store
			.getState()
			.inventory.map(
				(inventory: Inventory): JSX.Element => (
					<OverviewItem
						key={inventory.id}
						item={inventory}
						navigation={this.props.navigation}
					/>
				),
			);
	}
}

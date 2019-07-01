import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { Unsubscribe } from 'redux';
import store from '../../store';
import OverviewItem from './overviewItem';
import HeaderIcons from './headerIcons';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
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

	public static navigationOptions = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return {
			title: 'My Stuff',
			headerRight: <HeaderIcons navigation={props.navigation} />,
		};
	};

	public state = {
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
			<View style={styles.overview}>
				<ScrollView>{this.state.inventoryList}</ScrollView>
			</View>
		);
	}

	private getInventoryList(): JSX.Element[] {
		return store
			.getState()
			.inventory.inventory.map(
				(inventory): JSX.Element => (
					<OverviewItem
						key={inventory.id}
						item={inventory}
						navigation={this.props.navigation}
					/>
				),
			);
	}
}

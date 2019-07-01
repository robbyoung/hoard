import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import OverviewItem from './overviewItem';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import HeaderIcons from './headerIcons';
import store from '../../store';
import { Unsubscribe } from 'redux';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
	},
});

interface OverviewState {
	inventoryList: JSX.Element[],
}
export default class Overview extends Component<NavigationInjectedProps, OverviewState> {
	private unsubscribe: Unsubscribe = () => undefined;

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
	}

	public componentWillMount() {
		this.unsubscribe = store.subscribe(() => this.setState({
			inventoryList: this.getInventoryList(),
		}));
	}

	public componentWillUnmount() {
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
		return store.getState().inventory.inventory.map(
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

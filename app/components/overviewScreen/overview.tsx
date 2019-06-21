import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import OverviewItem from './overviewItem';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import HeaderIcons from './headerIcons';
import store from '../../store';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
	},
});

export default class Overview extends Component<NavigationInjectedProps> {
	public static navigationOptions = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return {
			title: 'My Stuff',
			headerRight: <HeaderIcons navigation={props.navigation} />,
		};
	};
	private inventoryList = store.getState().inventory.inventory.map(
		(inventory): JSX.Element => (
			<OverviewItem
				key={inventory.id}
				item={inventory}
				navigation={this.props.navigation}
			/>
		),
	);
	public render(): JSX.Element {
		return (
			<View style={styles.overview}>
				<ScrollView>{this.inventoryList}</ScrollView>
			</View>
		);
	}
}

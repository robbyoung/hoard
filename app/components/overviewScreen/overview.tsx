import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { testInventory } from '../../data/testInventory';
import OverviewItem from './overviewItem';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import { NavigateToStats } from '../statsScreen/stats.nav';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
	},
	statsButton: {
		marginRight: 20,
		fontSize: 20,
	},
});

export default class Overview extends Component<NavigationInjectedProps> {
	public static navigationOptions = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return {
			title: 'My Stuff',
			headerRight: (
				<TouchableOpacity
					onPress={(): void =>
						NavigateToStats(props.navigation, { category: 'Book' })
					}>
					<FontAwesome style={styles.statsButton}>
						{Icons.chartPie}
					</FontAwesome>
				</TouchableOpacity>
			),
		};
	};
	private inventoryList = testInventory.map(
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

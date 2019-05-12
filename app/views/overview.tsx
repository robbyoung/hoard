import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { testInventory } from '../data/testInventory';
import OverviewItem from './overviewItem';
import { NavigationInjectedProps } from 'react-navigation';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
	},
});

export default class Overview extends Component<NavigationInjectedProps> {
	public static navigationOptions = {
		title: 'My Stuff',
	}
	private inventoryList = testInventory.map(
		(inventory): JSX.Element => (
			<OverviewItem 
				key={inventory.id} 
				item={inventory}
				navigation={this.props.navigation}/>
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

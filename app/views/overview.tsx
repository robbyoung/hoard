import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { testInventory } from '../data/testInventory';
import OverviewItem from './overviewItem';

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
	},
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#565656',
	},
	list: {
		flexGrow: 0.83,
	},
});

const inventoryList = testInventory.map(
	(inventory): JSX.Element => (
		<OverviewItem key={inventory.id} item={inventory} />
	),
);

export default class Overview extends Component {
	public render(): JSX.Element {
		return (
			<View style={styles.overview}>
				<Text style={styles.heading}>My Stuff</Text>
				<ScrollView style={styles.list}>{inventoryList}</ScrollView>
			</View>
		);
	}
}

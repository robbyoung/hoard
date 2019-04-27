import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {testInventory} from '../data/testInventory';
import OverviewItem from './overviewItem';

const inventoryList = testInventory.map((inventory) =>
	<OverviewItem
		key={inventory.id}
		item={inventory}/>
);

interface Props {}
export default class Overview extends Component<Props> {
	render() {
		return (
			<View style={styles.overview}>
				<Text style={styles.heading}>
					My Stuff
				</Text>
				<ScrollView style={styles.list}>
					{inventoryList}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	overview: {
		backgroundColor: '#e6e6e6',
	},
	heading: {
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		borderBottomWidth: 2,
		borderBottomColor: '#565656'
	},
	list: {
	}
});
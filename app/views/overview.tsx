import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {testInventory} from '../data/testInventory';
import OverviewItem from './overviewItem';

const inventoryList = testInventory.map((inventory) =>
	<OverviewItem
		key={inventory.id}
		item={inventory}
		colour={'#009933'}/>
);

interface Props {}
export default class Overview extends Component<Props> {
	render() {
		return (
			<View style={styles.overview}>
				<Text style={styles.heading}>
					My Stuff
				</Text>
				{inventoryList}
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
		textAlign: 'center',
		marginBottom: 10,
		marginTop: 20,
	},
});
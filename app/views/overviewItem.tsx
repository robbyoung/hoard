import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Inventory} from '../data/testCategories';
import FontAwesome from 'react-native-fontawesome';
import { getCategoryIcon } from '../utils/iconHelpers';
import { getCategoryColour } from '../utils/colourHelpers';

interface Props {
	item: Inventory;
}
export default class OverviewItem extends Component<Props> {
	private containerColour = {
		backgroundColor: getCategoryColour(this.props.item.category),
	}
	render() {
		return (
			<View style={[this.containerColour, styles.container]}>
				<FontAwesome style={styles.icon}>
					{getCategoryIcon(this.props.item.category)}
				</FontAwesome>
				<Text style={styles.title}>
					{this.props.item.name}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		// borderRadius: 3,
		marginBottom: 1,
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		margin: 10,
		color: 'white',
	},
	icon: {
		fontSize: 22,
		textAlign: 'center',
		marginTop: 10,
		marginLeft: 10,
		paddingTop: 3,
		color: 'white',
	}
});
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Inventory} from '../data/testCategories';
import FontAwesome, { Icons } from 'react-native-fontawesome';

interface Props {
	item: Inventory;
	colour: string;
}
export default class OverviewItem extends Component<Props> {
	private containerColour = {
		backgroundColor: this.props.colour,
	}
	render() {
		return (
			<View style={[this.containerColour, styles.container]}>
				<FontAwesome style={styles.icon}>
					{Icons.book}
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
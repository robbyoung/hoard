import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Inventory} from '../data/testCategories';
import FontAwesome, { Icons } from 'react-native-fontawesome';

interface Props {
	item: Inventory;
	colour: string;
}
export default class OverviewItem extends Component<Props> {
	private labelStyle = {
		backgroundColor: this.props.colour,
		margin: 10,
		borderRadius: 2,
	}
	render() {
		return (
			<View style={this.labelStyle}>
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
		color: 'white',
	}
});
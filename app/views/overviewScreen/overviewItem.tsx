import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Inventory } from '../../data/testCategories';
import FontAwesome from 'react-native-fontawesome';
import { getCategoryIcon } from '../../utils/iconHelpers';
import { getCategoryColour } from '../../utils/colourHelpers';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationInjectedProps } from 'react-navigation';
import { NavigateToItemDetails } from '../itemDetailsScreen/itemDetails.nav';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
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
	},
});

interface Props extends NavigationInjectedProps {
	item: Inventory;
}
export default class OverviewItem extends Component<Props> {
	private containerColour = {
		backgroundColor: getCategoryColour(this.props.item.category),
	};
	public render(): JSX.Element {
		return (
			<TouchableHighlight
				onPress={(): void =>
					NavigateToItemDetails(this.props.navigation, {
						item: this.props.item,
					})
				}>
				<View style={[this.containerColour, styles.container]}>
					<FontAwesome style={styles.icon}>
						{getCategoryIcon(this.props.item.category)}
					</FontAwesome>
					<Text style={styles.title}>{this.props.item.name}</Text>
				</View>
			</TouchableHighlight>
		);
	}
}

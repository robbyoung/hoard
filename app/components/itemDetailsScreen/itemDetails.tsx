import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import FontAwesome from 'react-native-fontawesome';
import {
	ItemDetailsNavigationParams,
	extractItemDetailsParams,
} from './itemDetails.nav';
import ItemAttribute from './itemAttribute';
import { getCategoryIcon } from '../../utils/iconHelpers';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		margin: 10,
	},
	attributes: {
		margin: 10,
		padding: 5,
		borderRadius: 5,
		backgroundColor: '#f2f2f2',
	},
	icon: {
		marginTop: 5,
		marginRight: 5,
		fontSize: 22,
	},
	category: {
		fontSize: 22,
	},
});

export default class ItemDetails extends Component<NavigationInjectedProps> {
	private params: ItemDetailsNavigationParams = extractItemDetailsParams(
		this.props.navigation,
	);
	public static navigationOptions = {
		title: 'Details',
	};

	private attributeList = this.params.item.attributes.map(
		(attribute): JSX.Element => (
			<ItemAttribute attribute={attribute} key={attribute.name} />
		),
	);
	public render(): JSX.Element {
		return (
			<View>
				<Text style={styles.title}>{this.params.item.name}</Text>
				<View style={styles.row}>
					<FontAwesome style={styles.icon}>
						{getCategoryIcon(this.params.item.category)}
					</FontAwesome>
					<Text style={styles.category}>
						{this.params.item.category}
					</Text>
				</View>
				<View style={styles.attributes}>{this.attributeList}</View>
			</View>
		);
	}
}

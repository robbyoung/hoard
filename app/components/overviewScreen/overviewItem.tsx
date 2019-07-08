import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationInjectedProps } from 'react-navigation';
import { getCategoryIcon } from '../../utils/iconHelpers';
import { getCategoryColour } from '../../utils/colourHelpers';
import { Inventory } from '../../state';
import { Screens } from '../../screens';
import store from '../../store';
import { ActionType } from '../../reducers/actions';
import { SetItemToEditAction } from '../../reducers/editItem';

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
			<TouchableOpacity
				onPress={(): void => {
					const editItem: SetItemToEditAction = {
						type: ActionType.SetItemToEdit,
						newItem: this.props.item,
					};
					store.dispatch(editItem);
					this.props.navigation.navigate(Screens.ItemDetails);
				}}>
				<View style={[this.containerColour, styles.container]}>
					<FontAwesome style={styles.icon}>
						{getCategoryIcon(this.props.item.category)}
					</FontAwesome>
					<Text style={styles.title}>{this.props.item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

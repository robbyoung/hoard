import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationInjectedProps } from 'react-navigation';
import { getCategoryIcon } from '../../utils/iconHelpers';
import { Inventory } from '../../state';
import { Screens } from '../../screens';
import store from '../../store';
import { ActionType } from '../../reducers/actions';
import { darkColor, black, white } from '../../styles';
import { SetItemToEditAction } from '../../actions/setItemToEdit';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 1,
		backgroundColor: white,
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		margin: 10,
		color: black,
	},
	icon: {
		fontSize: 22,
		textAlign: 'center',
		marginTop: 10,
		marginLeft: 10,
		paddingTop: 3,
		color: darkColor,
	},
});

interface Props extends NavigationInjectedProps {
	item: Inventory;
}
export default class OverviewItem extends Component<Props> {
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
				<View style={[styles.container]}>
					<FontAwesome style={styles.icon}>
						{getCategoryIcon(this.props.item.category)}
					</FontAwesome>
					<Text style={styles.title}>{this.props.item.name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

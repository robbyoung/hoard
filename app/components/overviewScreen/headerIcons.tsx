import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { NavigateToStats } from '../statsScreen/stats.nav';
import { NavigateToEditItem } from '../editItemScreen/editItem.nav';
import { ActionType } from '../../reducers/actions';
import store from '../../store';

const styles = StyleSheet.create({
	headerButtonList: {
		flexDirection: 'row',
	},
	headerButton: {
		marginRight: 20,
		fontSize: 22,
	},
});

export default class HeaderIcons extends Component<NavigationInjectedProps> {
	public render(): JSX.Element {
		return (
			<View style={styles.headerButtonList}>
				<TouchableOpacity
					onPress={(): void =>
						NavigateToStats(this.props.navigation, {
							category: 'Book',
						})
					}>
					<FontAwesome style={styles.headerButton}>
						{Icons.chartPie}
					</FontAwesome>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={(): void => {
						store.dispatch({
							type: ActionType.SetItemToEdit,
						});
						NavigateToEditItem(this.props.navigation, {});
					}}>
					<FontAwesome style={styles.headerButton}>
						{Icons.plusCircle}
					</FontAwesome>
				</TouchableOpacity>
			</View>
		);
	}
}

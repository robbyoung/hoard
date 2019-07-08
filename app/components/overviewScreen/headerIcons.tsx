import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { ActionType } from '../../reducers/actions';
import store from '../../store';
import { Screens } from '../../screens';

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
					onPress={(): boolean =>
						this.props.navigation.navigate(Screens.Stats)
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
						this.props.navigation.navigate(Screens.EditItem);
					}}>
					<FontAwesome style={styles.headerButton}>
						{Icons.plusCircle}
					</FontAwesome>
				</TouchableOpacity>
			</View>
		);
	}
}

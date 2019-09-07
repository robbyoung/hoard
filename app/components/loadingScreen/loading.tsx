import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
	NavigationInjectedProps,
	NavigationActions,
	StackActions,
} from 'react-navigation';
import store from '../../store';
import { InventoryState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { darkColor, white } from '../../styles';

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: white,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 32,
		color: darkColor,
	},
});

export default class Loading extends Component<NavigationInjectedProps> {
	public static navigationOptions: { header: null } = {
		header: null,
	};

	public render(): JSX.Element {
		return (
			<View style={styles.background}>
				<Text style={styles.title}>HOARD</Text>
			</View>
		);
	}

	public async componentDidMount(): Promise<void> {
		await this.loadSavedData();
		this.navigateToOverview();
	}

	private navigateToOverview(): void {
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Overview' })],
		});

		this.props.navigation.dispatch(resetAction);
	}

	private async loadSavedData(): Promise<void> {
		await this.loadSavedInventory();
	}

	private async loadSavedInventory(): Promise<void> {
		const state = await AsyncStorage.getItem('inventory');
		let savedState: InventoryState;
		if (state !== undefined && state !== null) {
			savedState = JSON.parse(state) as InventoryState;
			store.dispatch({
				type: ActionType.LoadInventory,
				state: savedState,
			});
		}
	}
}

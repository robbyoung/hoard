import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
	NavigationInjectedProps, NavigationActions, StackActions,
} from 'react-navigation';
import { Screens } from '../../screens';
import store from '../../store';
import { InventoryState } from '../../state';
import { ActionType } from '../../reducers/actions';

export default class Loading extends Component<
	NavigationInjectedProps
> {
	public static navigationOptions = {
		header: null,
	}

	public render(): JSX.Element {
		return (
			<View>
			</View>
		);
	}

	public async componentDidMount() {
		await this.loadSavedData();
		this.navigateToOverview();
	};

	private navigateToOverview() {
		const resetAction = StackActions.reset({
		  index: 0,
		  actions: [
			NavigationActions.navigate({ routeName: 'Overview' }),
		  ]
		});
	
		this.props.navigation.dispatch(resetAction);
	}

	private async loadSavedData() {
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

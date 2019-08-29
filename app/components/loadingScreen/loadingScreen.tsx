import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import {
	NavigationInjectedProps,
	StackActions,
	NavigationActions,
} from 'react-navigation';
import { Screens } from '../../screens';
import store from '../../store';
import { InventoryState } from '../../state';
import { ActionType } from '../../reducers/actions';
export default class Loading extends Component<
	NavigationInjectedProps
> {
	public render(): JSX.Element {
		return (
			<View>
			</View>
		);
	}

	public async componentDidMount() {
		await this.loadSavedData()
		this.props.navigation.navigate(Screens.Overview);
	};

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

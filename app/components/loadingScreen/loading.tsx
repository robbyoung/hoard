import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
	NavigationInjectedProps,
	NavigationActions,
	StackActions,
} from 'react-navigation';
import store from '../../store';
import { InventoryState, CategoriesState } from '../../state';
import { ActionType } from '../../reducers/actions';
import { darkColor, white } from '../../styles';
import { LoadInventoryAction } from '../../reducers/inventory';
import { LoadCategoriesAction } from '../../reducers/categories';

export default class Loading extends Component<NavigationInjectedProps> {
	public static navigationOptions: { header: null } = {
		header: null,
	};

	public render(): JSX.Element {
		return (
			<View/>
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
		await Promise.all([
			this.loadSavedInventory(),
			this.loadSavedCategories(),
		]);
	}

	private async loadSavedInventory(): Promise<void> {
		const state = await AsyncStorage.getItem('inventory');
		let savedState: InventoryState;
		if (state !== undefined && state !== null) {
			savedState = JSON.parse(state) as InventoryState;
			const loadInventoryAction: LoadInventoryAction = {
				type: ActionType.LoadInventory,
				state: savedState,
			};
			store.dispatch(loadInventoryAction);
		}
	}

	private async loadSavedCategories(): Promise<void> {
		const state = await AsyncStorage.getItem('categories');
		let savedState: CategoriesState;
		if (state !== undefined && state !== null) {
			savedState = JSON.parse(state) as CategoriesState;
			const loadCategoriesAction: LoadCategoriesAction = {
				type: ActionType.LoadCategories,
				state: savedState,
			};
			store.dispatch(loadCategoriesAction);
		}
	}
}

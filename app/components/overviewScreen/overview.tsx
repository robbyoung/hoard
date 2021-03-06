import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import {
	NavigationInjectedProps,
	NavigationStackScreenOptions,
} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import { Unsubscribe } from 'redux';
import { Icons } from 'react-native-fontawesome';
import { Screens } from '../../screens';
import { ActionType } from '../../reducers/actions';
import store from '../../store';
import { Inventory } from '../../state';
import { NavigationOptionsWithProps } from '../../aliases';
import HoardTabView from '../hoardTabView';
import OverviewItem from './overviewItem';
import createHeader from './headerIcons';
import OverviewCategory from './overviewCategory';

interface OverviewState {
	inventoryList: JSX.Element[];
	tabIndex: number;
}
export default class Overview extends Component<
	NavigationInjectedProps,
	OverviewState
> {
	private unsubscribe: Unsubscribe = (): void => undefined;

	public static navigationOptions: NavigationOptionsWithProps = (
		props: NavigationInjectedProps,
	): NavigationStackScreenOptions => {
		return createHeader('My Stuff', [
			{
				icon: Icons.plusCircle,
				callback: (): void => {
					store.dispatch({
						type: ActionType.SetItemToEdit,
					});
					props.navigation.navigate(Screens.EditItem);
				},
			},
			{
				icon: Icons.folderPlus,
				callback: (): void => {
					store.dispatch({
						type: ActionType.SetCategoryToEdit,
					});
					props.navigation.navigate(Screens.EditCategory);
				},
			},
			{
				icon: Icons.chartPie,
				callback: (): void => {
					store.dispatch({
						type: ActionType.SetStatsCategory,
						category: '',

					})
					props.navigation.navigate(Screens.Stats);
				},
			},
		]);
	};

	public state: OverviewState = {
		inventoryList: this.getInventoryList(),
		tabIndex: 0,
	};

	public componentWillMount(): void {
		this.unsubscribe = store.subscribe(
			(): void =>
				this.setState({
					inventoryList: this.getInventoryList(),
				}),
		);
	}

	public componentDidMount(): void {
		SplashScreen.hide();
	}

	public componentWillUnmount(): void {
		this.unsubscribe();
	}

	public render(): JSX.Element {
		return (
			<HoardTabView
				index={this.state.tabIndex}
				onTabChange={(index: number): void =>
					this.setState({
						...this.state,
						tabIndex: index,
					})
				}
				tabs={[
					{
						content: (
							<ScrollView>{this.getInventoryList()}</ScrollView>
						),
						key: 'inventory',
						title: 'Inventory',
					},
					{
						content: (
							<ScrollView>{this.getCategoryList()}</ScrollView>
						),
						key: 'categories',
						title: 'Categories',
					},
				]}
			/>
		);
	}

	private getInventoryList(): JSX.Element[] {
		return store
			.getState()
			.inventory.map(
				(inventory: Inventory): JSX.Element => (
					<OverviewItem
						key={inventory.id}
						item={inventory}
						navigation={this.props.navigation}
					/>
				),
			);
	}

	private getCategoryList(): JSX.Element[] {
		const categories = store.getState().categories;
		const categoryNames = Object.keys(categories);
		return categoryNames.map(
			(name: string): JSX.Element => (
				<OverviewCategory
					key={categories[name].id}
					name={name}
					category={categories[name]}
					navigation={this.props.navigation}
				/>
			),
		);
	}
}

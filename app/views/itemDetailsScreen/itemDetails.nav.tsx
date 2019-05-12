import { Inventory } from '../../data/testCategories';
import {
	NavigationScreenProp,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

export interface ItemDetailsNavigationParams {
	item: Inventory;
}

export function NavigateToItemDetails(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
	params: ItemDetailsNavigationParams,
): void {
	navigation.navigate('ItemDetails', params);
}

function checkParams(
	params: NavigationParams | undefined,
): params is ItemDetailsNavigationParams {
	return params && params.item;
}

export function extractItemDetailsParams(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
): ItemDetailsNavigationParams {
	const params = navigation.state.params;
	if (checkParams(params)) {
		return params;
	}
	throw new Error('Could not extract ItemDetails params');
}

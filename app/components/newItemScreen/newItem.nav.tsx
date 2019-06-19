import {
	NavigationScreenProp,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

export interface NewItemNavigationParams {
	// empty
}

export function NavigateToNewItem(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
	params: NewItemNavigationParams,
): void {
	navigation.navigate('NewItem', params);
}

function checkParams(
	params: NavigationParams | undefined,
): params is NewItemNavigationParams {
	return true;
}

export function extractNewItemParams(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
): NewItemNavigationParams {
	const params = navigation.state.params;
	if (checkParams(params)) {
		return params;
	}
	throw new Error('Could not extract NewItem params');
}

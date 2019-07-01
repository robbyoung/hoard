import {
	NavigationScreenProp,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

export function NavigateToNewItem(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
	params: {},
): void {
	navigation.navigate('NewItem', params);
}

function checkParams(params: NavigationParams | undefined): params is {} {
	return params === {};
}

export function extractNewItemParams(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
): {} {
	const params = navigation.state.params;
	if (checkParams(params)) {
		return params;
	}
	throw new Error('Could not extract NewItem params');
}

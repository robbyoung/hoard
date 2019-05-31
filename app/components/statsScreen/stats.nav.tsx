import {
	NavigationScreenProp,
	NavigationRoute,
	NavigationParams,
} from 'react-navigation';

export interface StatsNavigationParams {
	category: string;
}

export function NavigateToStats(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
	params: StatsNavigationParams,
): void {
	navigation.navigate('Stats', params);
}

function checkParams(
	params: NavigationParams | undefined,
): params is StatsNavigationParams {
	return params && params.category;
}

export function extractStatsParams(
	navigation: NavigationScreenProp<
		NavigationRoute<NavigationParams>,
		NavigationParams
	>,
): StatsNavigationParams {
	const params = navigation.state.params;
	if (checkParams(params)) {
		return params;
	}
	throw new Error('Could not extract Stats params');
}

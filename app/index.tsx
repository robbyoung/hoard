import { createStackNavigator, createAppContainer } from 'react-navigation';
import Overview from './views/overviewScreen/overview';
import ItemDetails from './views/itemDetailsScreen/itemDetails';
import Stats from './views/statsScreen/stats';

const MainNavigator = createStackNavigator(
	{
		Overview: { screen: Overview },
		ItemDetails: { screen: ItemDetails },
		Stats: { screen: Stats },
	},
	{
		initialRouteName: 'Overview',
	},
);

export const App = createAppContainer(MainNavigator);

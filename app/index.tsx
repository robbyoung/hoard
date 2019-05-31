import { createStackNavigator, createAppContainer } from 'react-navigation';
import Overview from './components/overviewScreen/overview';
import ItemDetails from './components/itemDetailsScreen/itemDetails';
import Stats from './components/statsScreen/stats';

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

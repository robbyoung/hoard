import { createStackNavigator, createAppContainer } from 'react-navigation';
import Overview from './views/overviewScreen/overview';
import ItemDetails from './views/itemDetailsScreen/itemDetails';

const MainNavigator = createStackNavigator(
	{
		Overview: { screen: Overview },
		ItemDetails: { screen: ItemDetails },
	},
	{
		initialRouteName: 'Overview',
	},
);

export const App = createAppContainer(MainNavigator);

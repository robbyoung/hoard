import { createStackNavigator, createAppContainer } from 'react-navigation';
import Overview from './components/overviewScreen/overview';
import ItemDetails from './components/itemDetailsScreen/itemDetails';
import Stats from './components/statsScreen/stats';
import NewItem from './components/newItemScreen/newItem';

const MainNavigator = createStackNavigator(
	{
		Overview: { screen: Overview },
		NewItem: { screen: NewItem },
		ItemDetails: { screen: ItemDetails },
		Stats: { screen: Stats },
	},
	{
		initialRouteName: 'Overview',
	},
);

export const App = createAppContainer(MainNavigator);

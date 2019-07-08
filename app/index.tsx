import { createStackNavigator, createAppContainer } from 'react-navigation';
import Overview from './components/overviewScreen/overview';
import ItemDetails from './components/itemDetailsScreen/itemDetails';
import Stats from './components/statsScreen/stats';
import EditItem from './components/editItemScreen/editItem';
import { Screens } from './screens';

const MainNavigator = createStackNavigator(
	{
		Overview: { screen: Overview },
		EditItem: { screen: EditItem },
		ItemDetails: { screen: ItemDetails },
		Stats: { screen: Stats },
	},
	{
		initialRouteName: Screens.Overview,
	},
);

export const App = createAppContainer(MainNavigator);

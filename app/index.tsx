import { createStackNavigator, createAppContainer } from 'react-navigation';
import Overview from './components/overviewScreen/overview';
import ItemDetails from './components/itemDetailsScreen/itemDetails';
import Stats from './components/statsScreen/stats';
import EditItem from './components/editItemScreen/editItem';
import Loading from './components/loadingScreen/loading';
import { Screens } from './screens';

const MainNavigator = createStackNavigator(
	{
		Loading: { screen: Loading },
		Overview: { screen: Overview },
		EditItem: { screen: EditItem },
		ItemDetails: { screen: ItemDetails },
		Stats: { screen: Stats },
	},
	{
		initialRouteName: Screens.Loading,
	},
);

export const App = createAppContainer(MainNavigator);

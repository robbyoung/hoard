import {createStackNavigator, createAppContainer} from 'react-navigation';
import Overview from './views/overview';
import Item from './views/item';

const MainNavigator = createStackNavigator({
  Overview: {screen: Overview},
  Item: {screen: Item},
}, {
	initialRouteName: 'Overview',
});

export const App = createAppContainer(MainNavigator);
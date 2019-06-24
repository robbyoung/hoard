import { combineReducers } from 'redux';
import inventory from './inventory';
import categories from './categories';
import stats from './stats';
import newItem from './newItem';

export default combineReducers({
	inventory,
	categories,
	stats,
	newItem,
});

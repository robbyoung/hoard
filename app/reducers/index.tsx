import { combineReducers } from 'redux';
import inventory from './inventory';
import categories from './categories';
import stats from './stats';
import editItem from './editItem';

export default combineReducers({
	inventory,
	categories,
	stats,
	editItem,
});

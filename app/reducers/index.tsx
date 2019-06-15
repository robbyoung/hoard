import { combineReducers } from 'redux';
import inventory from './inventory';
import categories from './categories';
import stats from './stats';

export default combineReducers({
	inventory,
	categories,
	stats,
});

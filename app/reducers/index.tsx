import { combineReducers } from 'redux';
import inventory from './inventory';
import categories from './categories';
import stats from './stats';

export default combineReducers({
	inventory,
	categories,
	stats,
});

export enum ActionType {
	AddCategory = 'ADD CATEGORY',
	RemoveCategory = 'REMOVE CATEGORY',
	AddInventory = 'ADD INVENTORY',
	RemoveInventory = 'REMOVE INVENTORY',
	SetStatsCategory = 'SET CATEGORY',
	SetStatsAttribute = 'SET ATTRIBUTE',
}

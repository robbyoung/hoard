import { createStore, Reducer } from 'redux';
import { Inventory, Category } from './data/testCategories';

interface HoardState {
	inventory: Inventory[];
	categories: { [key:string]: Category; };
}

interface HoardAction {
	type: string;
}

function reducer(state: HoardState | undefined, action: HoardAction): HoardState {
	// manage actions here
	return {
		inventory: [],
		categories: {},
	};
}

const store = createStore(reducer);
export default store;
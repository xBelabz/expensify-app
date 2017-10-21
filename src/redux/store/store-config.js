import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
export default () => (
	createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer
		}),

		// Added to connect the app to the Redux Devtools Chrome extension
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

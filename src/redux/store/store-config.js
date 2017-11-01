import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// Should Import "applyMiddleware" to apply
// this piece of middleware "redux-thunk"
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

// Preserving the redux dev tools after adding applyMiddleware as second argument
// If we are using the dev tools we are going to make sure that correctly get set up
// If not we ate not going to worry about it, the property do not exist by grabbing
// compose from redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => (
	createStore(
		combineReducers({
			expenses: expensesReducer,
			filters: filtersReducer,
			auth: authReducer
		}),

		/* -------------------------------------------------------------------------
		   - Now if we were not using the redux devtools this would be pretty easy
		   - Instead of having this line here teh second argument would be a call
		   - to apply middleware we could pass
		   - By adding the applyMiddleware(thunk) we will lose all of the
		   - functionality from the developer tools.
		   - So if we want to preserver this functionality we will create a const
		   - called composeEnhancers on the top
		------------------------------------------------------------------------- */
		// Added to connect the app to the redux dev tools Chrome extension
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

		// passing applyMiddleware as second argument
		composeEnhancers(applyMiddleware(thunk))
	)
);

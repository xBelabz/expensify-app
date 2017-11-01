import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import storeConfig from './redux/store/store-config';
import { startSetExpenses } from "./redux/actions/expenses";
import { login, logout } from './redux/actions/auth';
// import { setTextFilter } from "./redux/actions/filters";
// import getVisibleExpenses from './redux/selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// Firebase import for testing
import { firebase } from './firebase/firebase';

// Temporary import
// import './playground/promises';

/* -------------------------------------------------------------------------
   - Subscribe to any store changes
------------------------------------------------------------------------- */
const store = storeConfig();

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

/* -------------------------------------------------------------------------
   - Add new expenses
------------------------------------------------------------------------- */
// store.dispatch(addExpense({ description: 'Water bill', note: 'Water bill note', amount: '5000', createdAt: 1100000 }));
// store.dispatch(addExpense({ description: 'Gas bill', note: 'Gas bill note', amount: '2000', createdAt: 1200000 }));
// store.dispatch(addExpense({ description: 'Rent', note: 'Rent bill note', amount: '222000', createdAt: 12000200 }));

/* -------------------------------------------------------------------------
   - Set a filter for the expenses
------------------------------------------------------------------------- */
// store.dispatch(setTextFilter());

// setTimeout(() => {
// 	store.dispatch(setTextFilter('bill'));
// }, 3000);

/* -------------------------------------------------------------------------
   - Tweak what the actual render
   - The Provider will aloow us to provide the store to all the components
------------------------------------------------------------------------- */
const jsx = (
	<Provider store={ store }>
		<AppRouter/>
	</Provider>
);

/* -------------------------------------------------------------------------
   - Set app rendering into variable
------------------------------------------------------------------------- */
let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDom.render(jsx, document.getElementById('app'));
		hasRendered = true
	}
};

/* -------------------------------------------------------------------------
   - Creating a loading page
------------------------------------------------------------------------- */
ReactDom.render(<p>Loading...</p>, document.getElementById('app'));

/* -------------------------------------------------------------------------
   - Rendering control using firebase auth and history push to redirect
   user to the right page
------------------------------------------------------------------------- */
firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		// console.log('uid', user.uid);
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();

			if (history.location.pathname === '/') {
				history.push('/dashboard')
			}
		})
	} else {
		store.dispatch(logout());
		renderApp();
		history.push('/')
	}
});

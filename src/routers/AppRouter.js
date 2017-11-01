import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/LoginPage';
// import Header from '../components/HeaderComponent';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

// Exporting history to be able to use it everywhere
export const history = createHistory();

const AppRouter = () => (
	// Switch from browser router to regular router
	// to provide our own history value, we provide
	// the history prop to router and we can set it equal
	// to the custom history we just created
	// Instead of using browser router which already has history built in
	// We use the regular router and we pass our history in for the router code
	<Router history={ history }>
		<div>
			{/*<Header/>*/}

			<Switch>
				<Route path="/" component={ LoginPage } exact={ true }/>
				<PrivateRoute path="/dashboard" component={ DashboardPage }/>
				<PrivateRoute path="/create" component={ AddExpensePage }/>
				<PrivateRoute path="/edit/:id" component={ EditExpensePage }/>
				<Route path="/help" component={ HelpPage }/>
				<Route component={ NotFoundPage }/>
			</Switch>
		</div>
	</Router>

	// Browser router which uses the browser history bu default
	// <BrowserRouter>
	// 	<div>
	// 		<Header/>
	//
	// 		<Switch>
	// 			<Route path="/" component={ LoginPage } exact={ true }/>
	// 			<Route path="/dashboard" component={ DashboardPage }/>
	// 			<Route path="/create" component={ AddExpensePage }/>
	// 			<Route path="/edit/:id" component={ EditExpensePage }/>
	// 			<Route path="/help" component={ HelpPage }/>
	// 			<Route component={ NotFoundPage }/>
	// 		</Switch>
	// 	</div>
	// </BrowserRouter>
);

export  default AppRouter;

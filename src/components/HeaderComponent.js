import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/actions/auth'

/* -------------------------------------------------------------------------
   - adding export for testing purposes
------------------------------------------------------------------------- */
export const HeaderComponent = ({ logout }) => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={ true }>Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
		<button onClick={ logout }>Logout</button>
	</header>
);

/* -------------------------------------------------------------------------
   - Connection to redux, setting the two calls ()()
   - The first call is for the piece for state we need or dispatchers
     we want to use
   - For the first argument we don't need any state (undefined)
   - For the second argument we provide an map dispatch to props function
   - The second call is the component we try to connect
------------------------------------------------------------------------- */
const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(HeaderComponent);

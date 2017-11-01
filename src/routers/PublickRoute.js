import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/* -------------------------------------------------------------------------
   - When we are creating objects we can spread out an object to spread
   out all of its properties
   - When we are destructuring objects we can use the rest operator ...rest
   - To get a variable called rest with all the stuff we did not
   de-structure, so this will contain everything, but isAuthenticated,
   component and rest is just variables, we can name it anything we want.
   - this will give us access to all of other stuff and that is what we are
   going to pass down to Route
------------------------------------------------------------------------- */
export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route { ...rest } component={ (props) => (
		isAuthenticated ? (<Redirect to="/dashboard"/>) : (<Component { ...props }/>)
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

// No need for the second argument since we are not providing map dispatch
export default connect(mapStateToProps)(PublicRoute)

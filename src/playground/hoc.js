// Higher Order Component (HOC) - A component (HOC) that renders another component (Regular component)
// The goal is to reuse the code
// Avoid render hijacking
// Avoid Prop manipulation
// Avoid abstract state

import React from 'react';
import ReactDom from 'react-dom';

// const Info = (props) => (
// 	<div>
// 		<h1>Info</h1>
// 		<p>The info is: { props.info }</p>
// 	</div>
// );
//
// const withAdminWarning = (WrappedComponent) => {
// 	return (props) => (
// 		<div>
// 			{ props.isAdmin && <p>This is private info. Please don't share</p> }
// 			<WrappedComponent {...props}/>
// 		</div>
// 	)
// };
//
// const AdminInfo = withAdminWarning(Info);
//
// ReactDom.render(<AdminInfo isAdmin={ false } info="There are the details!"/>, document.getElementById('app'));

/* -------------------------------------------------------------------------
   - Challenge
------------------------------------------------------------------------- */
const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: { props.info }</p>
	</div>
);

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAuthenticated ? (
				<WrappedComponent {...props}/>
			) : (
				<p>Please login to view the info!</p>
			) }
		</div>
	)
};

const AuthInfo = requireAuthentication(Info);

ReactDom.render(<AuthInfo isAuthenticated={ true } info="There are the details!"/>, document.getElementById('app'));

import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${ id }`}>
			<h3>{ description }</h3>
		</Link>
		<p>{ amount } - { createdAt }</p>
	</div>
);

// In the first parenthesis we don't need anything from the state
// But we only provide the component ExpenseListItem.
export default ExpenseListItem;

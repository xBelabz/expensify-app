import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../redux/actions/expenses';

import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
	// console.log(props);
	return (
		<div>
			<ExpenseForm
				expense={ props.expense }
				onSubmit={(expense) => {
					props.dispatch(editExpense(props.expense.id, expense));
					// Redirect to home page
					props.history.push('/')
				}}
			/>

			<button onClick={() => {
				props.dispatch(removeExpense({ id: props.expense.id }));
				props.history.push('/')
			}}>Remove</button>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		// Array find method, find allows us to search through
		// an array looking for a single item.
		// We determine whether or not we found the correct item
		// by returning true or false from the callback.
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	}
};

export default connect(mapStateToProps)(EditExpensePage);

import React from 'react';
import { connect }  from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../redux/actions/expenses';

const AddExpensePage = (props) => (
	<div>
		<h2>Add Expense</h2>
		<ExpenseForm
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
				// Redirect to home page
				props.history.push('/')
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);

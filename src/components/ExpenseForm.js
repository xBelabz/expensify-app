import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

// Create a moment date - Actual time
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			note: props.expense ? props.expense.note : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			formError: ''
		};
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }))
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }))
		}
	};

	onNoteChange = (e) => {
		// const note = e.target.value;
		// Optional
		e.persist();
		this.setState(() => ({ note: e.target.value }))
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }))
		}
	};

	onFocusedChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }))
	};

	onSubmit = (e) => {
		e.preventDefault();

		// Generate a form error
		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ formError: 'Please provide a description and amount!' }));
		} else {
			this.setState(() => ({ formError: ''}));

			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			})
		}
	};

	render() {
		return (
			<div>
				{ this.state.formError && <p>{ this.state.formError }</p> }

				<form onSubmit={ this.onSubmit }>
					<input
						type="text"
						placeholder="Description"
						value={ this.state.description }
						onChange={ this.onDescriptionChange }
						autoFocus
					/>

					<input
						type="text"
						placeholder="Amount"
						value={ this.state.amount }
						onChange={ this.onAmountChange }
					/>

					<SingleDatePicker
						date={ this.state.createdAt }
						onDateChange={ this.onDateChange }
						focused={ this.state.calendarFocused }
						onFocusChange={ this.onFocusedChange }
						numberOfMonths={ 1 }
						isOutsideRange={ () => false }
					/>

					<textarea
						placeholder="Add a note for your expense (Optional)"
						value={ this.state.note }
						onChange={ this.onNoteChange }
					>
					</textarea>

					<button>Add Expense</button>
				</form>
			</div>
		)
	}
}

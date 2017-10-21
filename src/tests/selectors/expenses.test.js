import moment from 'moment';
import selectExpenses from '../../redux/selectors/expenses';
import expenses from '../fixtures/expenses';

test('Should filter by text value', () => {
	const filters = {
		text: 'e',
		sortBy: 'date',
		createdAt: undefined,
		endDate: undefined
	};

	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1]])
});

test('Should filter by start date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: moment(0),
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]])
});

test('Should filter by end date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: moment(0).add(2, 'days')
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[0], expenses[1]])
});

/* -------------------------------------------------------------------------
   - All sorting from bigger to smaller
------------------------------------------------------------------------- */

test('Should sort date', () => {
	const filters = {
		text: '',
		sortBy: 'date',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
});

test('Should sort amount', () => {
	const filters = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined
	};
	const result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
});

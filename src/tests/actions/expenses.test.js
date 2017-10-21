import { addExpense, editExpense, removeExpense } from '../../redux/actions/expenses';

test('Should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	})
});

test('Should setup edit expense action object', () => {
	const action = editExpense('123abc', { note: 'New updated note' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'New updated note'
		}
	})
});

test('Should setup add expense with provided values', () => {
	const expenseData = {
		description: 'React',
		amount: '100',
		createdAt: '1000',
		note: 'This is my note'
	};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			...expenseData
		}
	})

});

test('Should setup add expense with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	})
});
import { createStore } from 'redux';

// Action generator - Function that return action objects
// Example
// const add = ({a, b}, c) => {
// 	return a + b + c
// };
//
// console.log(add({ a: 1, b: 12 }, 100));

/* -------------------------------------------------------------------------
   - Incrementing with no argument
------------------------------------------------------------------------- */
const incrementCount = () => ({ type: 'INCREMENT' });

/* -------------------------------------------------------------------------
   - Decrementing with argument attached
   - Example 1 for DECREMENT using payload
------------------------------------------------------------------------- */
// const decrementCount = (payload = {}) => ({
// 	type: 'DECREMENT',
// 	decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
// });

/* -------------------------------------------------------------------------
   - Decrementing with argument attached
   - Example 2 for DECREMENT using destructuring
------------------------------------------------------------------------- */
const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	// decrementBy: decrementBy
	// or
	decrementBy
});

/* -------------------------------------------------------------------------
   - Set count using destructuring
------------------------------------------------------------------------- */
const setCount = ({ count }) => ({
	type: 'SET',
	count
});

/* -------------------------------------------------------------------------
   - Reset count using destructuring
------------------------------------------------------------------------- */
const resetCount = () => ({
	type: 'RESET'
});

/* -------------------------------------------------------------------------
   - Reducers
------------------------------------------------------------------------- */
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return { count: state.count + incrementBy };
		case 'DECREMENT':
			return { count: state.count - action.decrementBy };
		case 'SET':
			return { count: action.count };
		case 'RESET':
			return { count: 0 };
		default:
			return state;
	}
};

const store = createStore(countReducer);


// const store = createStore((state = { count: 0 }, action) => {
// 	switch (action.type) {
// 		case 'INCREMENT':
// 			// Use a dynamic action
// 			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
// 			return { count: state.count + incrementBy };
// 		case 'DECREMENT':
// 			// Use a dynamic action
// 			// const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
// 			return { count: state.count - action.decrementBy };
// 		case 'SET':
// 			return { count: action.count };
// 		case 'RESET':
// 			return { count: 0 };
// 		default:
// 			return state;
// 	}
//
// 	// Using Switch rather than if statement
// 	// if (action.type === 'INCREMENT') {
// 	// 	return { count: state.count + 1 };
// 	// } else {
// 	// 	return state
// 	// }
// });

// Watching the Redux store for state changing by subscribing to it
store.subscribe(() => {
	console.log(store.getState())
});

// Declare the subscription and call it
// const unsubscribe = store.subscribe(() => {
// 	console.log(store.getState())
// });
//
// unsubscribe();

// Action is an object that gets sent to the store
// Dispatch an action object

// Incrementing the count
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5
// });

// Replacement for the dispatch above
store.dispatch(incrementCount());

// Decrement the count
// store.dispatch({
// 	type: 'DECREMENT',
// 	decrementBy: 3
// });

store.dispatch(decrementCount({ decrementBy: 3 }));

// Set a new count
store.dispatch(setCount({ count: 101 }));

// Reset the count
store.dispatch(resetCount());

// console.log(store.getState());

// Similar to
// this.setState((prevState) => {
// 	return (prevState)
// });

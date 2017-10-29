import * as firebase from 'firebase';

/* -------------------------------------------------------------------------
   - How actions generators work
------------------------------------------------------------------------- */
// Component calls action generator
// Action generator returns object
// Component dispatches object
// Redux store changes

/* -------------------------------------------------------------------------
   - How asynchronous actions work
   - Redux don't allows de dispatch functions, we need to add the redux
   - middleware that is going to add a support for this behavior
   - Install redux-thunk to be able to dispatch function
------------------------------------------------------------------------- */
// Component calls action generator
// Action generator return a function
// Component dispatches function (?)
// Function runs (Has the ability to dispatch other actions and do whatever it wants)


// Initialize Firebase
const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

/* -------------------------------------------------------------------------
   - Set new data in firebase
------------------------------------------------------------------------- */
// database.ref().set({
// 	name: 'Belabz Belkora',
// 	age: 34,
// 	isSingle: true,
// 	location: {
// 		city: 'Rennes',
// 		country: 'France'
// 	}
// }).then(() => {
// 	console.log('Data have been saved')
// }).catch((error) => {
// 	console.log('Error: ', error)
// });

// database.ref().set('This is my data!');

// make some updates
// Set a value to the specific reference
// Pick which part of the database to update using ref()
// database.ref('age').set(37);
// database.ref('location/city').set('Paris');

// Setup new root child (attributes)
// database.ref('attributes').set({
// 	height: '1.80',
// 	weight: 63
// }).then(() => {
// 	console.log('Data have been saved!')
// }).catch((error) => {
// 	console.log('Error: ', error)
// });

/* -------------------------------------------------------------------------
   - Remove data
------------------------------------------------------------------------- */
// database.ref()
// 	.remove()
// 	.then(() => {
// 		console.log('Data have been removed!')
// 	}).catch((error) => {
// 		console.log('Error: ', error)
// });

/* -------------------------------------------------------------------------
   - Remove data using set()
------------------------------------------------------------------------- */
// database.ref('isSingle').set(null);

/* -------------------------------------------------------------------------
   - Update data
------------------------------------------------------------------------- */
// database.ref().update({
// 	name: 'Abdelaziz Belkoura',
// 	'job/title': 'JavaScript Developer',
// 	'job/company': 'Google',
// 	isSingle: null,
// 	'location/city': 'Silicon Valley'
// });

/* -------------------------------------------------------------------------
   - Fetch data a single time using once()
------------------------------------------------------------------------- */
// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val)
// 	}).catch((error) => {
// 		console.log('Error: ', error)
// });

/* -------------------------------------------------------------------------
   - Fetch data, subscribe and watch data changing using on()
   - Callback function as second function to on()
   - Catch error as third function
------------------------------------------------------------------------- */
// database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val())
// }, (error) => {
// 	console.log('Error: ', error)
// });
//
// setTimeout(() => {
// 	database.ref().update({
// 		name: 'Abdelaziz Belkoura',
// 		'location/country': 'USA'
// 	})
// }, 5000);
//
// // Unsubscribe from all subscriptions
// setTimeout(() => {
// 	database.ref().off()
// }, 5000);
//
// setTimeout(() => {
// 	database.ref().update({
// 		name: 'xBelabz',
// 		'location/country': 'USA'
// 	})
// }, 5000);

/* -------------------------------------------------------------------------
   - Unsubscribe from a specific subscription
------------------------------------------------------------------------- */
// const subscription = (snapshot) => {
// 	console.log(snapshot.val())
// };
//
// setTimeout(() => {
// 	database.ref().off(subscription)
// }, 5000);

// Or

// const subscription = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val())
// });

// setTimeout(() => {
// 	database.ref().off(subscription)
// }, 5000)

/* -------------------------------------------------------------------------
   - Challenge
------------------------------------------------------------------------- */
// database.ref().on('value', (snapshot) => {
// 	const data = snapshot.val();
// 	const phrase = `${ data.name } is a ${ data.job.title } at ${ data.job.company }`;
//
// 	console.log(phrase)
// });
//
// setTimeout(() => {
// 	database.ref().update({
// 		name: 'xBelabz',
// 		'job/company': 'Amazon'
// 	})
// }, 5000);

/* -------------------------------------------------------------------------
   - Push data to firebase that generate random unique id
------------------------------------------------------------------------- */
// database.ref('notes').push(
// 	{
// 		title: 'Course 1',
// 		body: 'React, React Native'
// 	}
// );

// Update data using the id
// database.ref('notes/-KxZTsqNQH_cQr1iQ21C').update({
// 	title: 'New Courses'
// });
//
// // Remove data using the id
// database.ref('notes/-KxZTsqNQH_cQr1iQ21C').remove();

/* -------------------------------------------------------------------------
   - Example to use array with firebase
------------------------------------------------------------------------- */
// const notes = [{
// 		id: 1,
// 		title: 'First note',
// 		body: 'This is my note 1'
// 	},
// 	{
// 		id: 2,
// 		title: 'Second note',
// 		body: 'This is my note 2'
// 	}
// ];
//
// database.ref('notes').set(notes);

/* -------------------------------------------------------------------------
   - Challenge
------------------------------------------------------------------------- */

// database.ref('expenses').push({
// 	description: 'Expense 3',
// 	note: 'This is my expense 3',
// 	amount: 1234,
// 	createdAt: 3000
// });

// Get the data once
// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
//
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			})
// 		});
//
// 		console.log(expenses)
// 	});

// Get the data and subscribe to it
// database.ref('expenses')
// 	.on('value', (snapshot) => {
// 		const expenses = [];
//
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			})
// 		});
//
// 		console.log(expenses)
// 	});

// // Subscribe to a remove event using child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// });
//
// // Subscribe to a change event using child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// });
//
// // Subscribe to an add event using child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val())
// });

/* -------------------------------------------------------------------------
   - Object destructuring
------------------------------------------------------------------------- */
// const person = {
// 	name: 'Belabz',
// 	age: 34,
// 	location: {
// 		city: 'Rennes',
// 		temp: 24
// 	}
// };
//
// // const name = person.name;
// // const age = person.age;
//
// // Giving a default value to a const if the object don't exist as used with age
// // Renaming a new local const name giving it a default value as used with name
// const { name: firstName = 'Anonymous', age = 0 } = person;
//
// console.log(`${firstName} is ${age}`);
//
// // Creating a local const as used with temp
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// }

/* -------------------------------------------------------------------------
   - Challenge
------------------------------------------------------------------------- */
// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);

/* -------------------------------------------------------------------------
   - Array destructuring
------------------------------------------------------------------------- */
const address = ['11 Rennes street', 'Rennes', '35000', 'France'];

// Grab only the second and the third item in array
// We use a comma without defining a variable, for the last ones is to leave it empty
// const [, city, zip];

// Use a default value for am array variable that not exist
// const address = ['11 Rennes street', , '35000', 'France'];
// const [street, city = 'Paris', zip, state] = address;

const [street, city, zip, state] = address;

console.log(`You are in ${city} ${state}`);

/* -------------------------------------------------------------------------
   - Challenge
------------------------------------------------------------------------- */
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);

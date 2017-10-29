/* -------------------------------------------------------------------------
   - Example 1
------------------------------------------------------------------------- */
// / const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// Resolve can only run once
// 		resolve('This is my resolved data!')
// 	}, 2000)
// });

/* -------------------------------------------------------------------------
   - Example 2
------------------------------------------------------------------------- */
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// Resolve can only run once
		resolve({
			name: 'Belabz',
			age: 34
		});

		reject('Something went wrong!')
	}, 2000)
});

console.log('before');

// Attache the handler
promise.then((data) => {
	console.log(data);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Resolve can only run once
			resolve('This is my other promise')
		}, 2000)
	});
}).then((str) => {
	console.log('Does this run?', str)
	// Passing data from one success callback to another callback
	// Expected result: Does this run? Some data
}).catch((error) => {
	console.log('error: ', error)
});

// User catch as second argument
// promise.then((data) => {
// 	console.log(data)
// }, (error) => {
// 	console.log('error: ', error)
// });

console.log('after');
const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${ name }!`;

test('should add two numbers', () => {
	const result = add(3, 4);

	// if (result !== 7) {
	// 	throw new Error(`You added 4 and 3, the result was expected ${ result }!`)
	// }

	expect(result).toBe(7);
});

test('Should generate greeting from name', () => {
	const result = generateGreeting('Belabz');
	expect(result).toBe('Hello Belabz!')
});

test('Should generate greeting from name', () => {
	const result = generateGreeting();
	expect(result).toBe('Hello Anonymous!')
});

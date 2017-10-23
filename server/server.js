const path = require('path');
const express = require('express');
const app = express();
const publicPath =  path.join(__dirname, '..', 'public');

// Heroku available port
const port = process.env.PORT || 3000;


// Use the public directory
app.use(express.static(publicPath));

// If what the requested is not in the public folder just give them back index.html
app.get('*', (req, res) => {
	res.sendFile(path.join(publicPath, 'index.html'));
});

// Start on port 3000
app.listen(port, () => {
	console.log('Server is up!')
});

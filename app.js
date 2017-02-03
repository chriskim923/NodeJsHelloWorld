const http = require('http');
// If you want to load a file:
const fs = require('fs');

// Host locally use loopback address 127.0.0.1
const hostname = '127.0.0.1';
// Define a port
const port = 3000;
// Reading the file
fs.readFile('index.html', (err, html) => {
	if(err){
		throw err;
	}
	// Create  a variable called server using a http module
	// Use the createServer function with request and response
	const server = http.createServer((req, res) => {
		// Set a status code. When you make a request, 200 means status is OK
		res.statusCode = 200;
		// Then set a header to read content as html text
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});

	server.listen(port, hostname, () => {
		console.log('Server started on port '+port);
	});
});


// Run server on web browser by typing 127.0.0.1:3000
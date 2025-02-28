const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Handle errors
proxy.on('error', (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong. And we are reporting a custom error message.');
});

// Create your server and proxy requests
const server = http.createServer((req, res) => {
  // Change the target URL as needed
  const targetUrl = 'http://google.com';
  
  proxy.web(req, res, { target: google.com });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});

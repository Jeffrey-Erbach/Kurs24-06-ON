// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' }); // Content-Type auf 'text/html' ändern
  res.end('<h1 style="color: red;">Ich will neue Lautsprecher von Amazon</h1>');
});

console.log(typeof (server));

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

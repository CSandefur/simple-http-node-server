const http = require('http');
const fs = require('fs');
const port = 3000;


const requestHandler = (request, response) => {

  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
  if (err) throw err;

  console.log('success')
});

  response.end(`Handling a request on port ${port}`)
};





const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});

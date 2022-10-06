const http = require('http');

const server = http.createServer((req, res) => {
  const { method } = req;
  if (method === 'POST') {
    console.log('content-type', req.headers['content-type']);
    let postData = "";
    req.on('data', (chunk) => {
      postData += chunk;
    });

    req.on('end', () => {
      console.log('postData:', postData);
      res.end(postData);
    });
  }
});

server.listen(8000, () => {
  console.log('server is running');
});
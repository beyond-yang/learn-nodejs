const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const path = url.split('?')[0];
  const query = querystring.parse(url.split('?')[1]);
  if (method === 'POST') {
    let postData = "";
    req.on('data', (chunk) => {
      postData += chunk;
    });
    req.on('end', () => {
      resData.postData = postData;
    });
  }
  const resData = {
    method,
    url,
    path,
    query,
  }
  console.log('resData: ', resData);
  res.end(JSON.stringify(resData));
});

server.listen(8000, () => {
  console.log('server is running');
});
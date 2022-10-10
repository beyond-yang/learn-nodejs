const querystring = require('querystring');
const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');
const { join } = require('path');

const getPostData = (req, res) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({});
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
    }
    let postData = '';
    req.on('data', (chunk) => {
      postData += chunk;
    });
    req.on('end', () => {
      if (!postData) {
        resolve({});
        return;
      }
      resolve(JSON.stringify(postData));
    });
  });
  return promise;
};

const handleServer = (req, res) => {
  const { method, url } = req;
  req.path = url.split('?')[0];
  req.query = querystring.parse(url.split('?')[1]);
  res.setHeader('Content-type', 'application/json')

  getPostData(req, res).then((postData) => {
    req.body = postData;
    const userData = handleUserRouter(req, res);
    const blogData = handleBlogRouter(req, res);
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
    }
    if (blogData) {
      res.end(
        JSON.stringify(blogData)
      );
    }
  });
}

module.exports = handleServer;
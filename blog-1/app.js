const querystring = require('querystring');
const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');
const { join } = require('path');

/**
 * 获取 post data 数据
 * @param {*} req 请求对象
 * @param {*} res 相应对象
 * @returns 
 */
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
      resolve(JSON.parse(postData));
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
    // const blogData = handleBlogRouter(req, res);
    const blogResult = handleBlogRouter(req, res);
    blogResult.then((blogData) => {
      if (blogData) {
        res.end(
          JSON.stringify(blogData)
        );
      }
    });
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
    }
  });
}

module.exports = handleServer;
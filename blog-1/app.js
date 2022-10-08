const querystring = require('querystring');
const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');

const handleServer = (req, res) => {
  const { method, url } = req;
  req.path = url.split('?')[0];
  req.query = querystring.parse(url.split('?')[1]);
  res.setHeader('Content-type', 'application/json')
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
}

module.exports = handleServer;
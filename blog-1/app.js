const querystring = require('querystring');
const handleUserRouter = require('./src/router/user');
const handleBlogRouter = require('./src/router/blog');
const { getCookieExprise } = require('./src/utils/common');
const { set, get } = require('./src/db/redis');
// 存储 session 数据
// const SESSION_DATA = {};

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

  /**
   * 获取并解析 cookie
   */
  req.cookie = {};
  const cookies = req.headers.cookie || ''; // k1=v1;k2=v2;
  cookies.split(';').forEach(cookie => {
      if (!cookie) {
        return;
      }
      const key = cookie.split('=')[0].trim();
      const val = cookie.split('=')[1].trim();
      req.cookie[key] = val;
  });

  /**
   * 初始化session
   */
  // let userid = req.cookie.userid;
  // let needSetCookie = false;
  // if (userid) {
  //   if (!SESSION_DATA[userid]) {
  //     SESSION_DATA[userid] = {};
  //   }
  // } else {
  //   needSetCookie = true;
  //   userid = `${Date.now()}_${Math.random()}`;
  //   SESSION_DATA[userid] = {};
  // }

  // req.session = SESSION_DATA[userid];

  /**
   * 使用 redis 初始化 session
   */
  let needSetCookie = false;
  let userid = req.cookie.userid;
  if (!userid) {
    needSetCookie = true;
    userid = `${Date.now()}_${Math.random()}`;
    set(userid, {})
  }
  req.sessionid = userid;
  get(userid).then((sessionData) => {
    if (sessionData === null) {
      set(userid, {});
      req.session = {};
    } else {
      req.session = sessionData;
    }
    console.log('session111', req.session);
    return getPostData(req, res);
  })
  .then((postData) => {
    req.body = postData;
    // const userData = handleUserRouter(req, res);
    const userResult = handleUserRouter(req, res);
    if (userResult) {
      userResult.then((userData) => {
        if (needSetCookie) {
          // 服务端修改 cookie
          res.setHeader('Set-Cookie', `userid=${userid};path=/;httpOnly;expires=${getCookieExprise()}`);
        }
        res.end(
          JSON.stringify(userData)
        )
      });
      return;
    }
    // const blogData = handleBlogRouter(req, res);
    const blogResult = handleBlogRouter(req, res);
    if (blogResult) {
      blogResult.then((blogData) => {
        if (needSetCookie) {
          // 服务端修改 cookie
          res.setHeader('Set-Cookie', `userid=${userid};path=/;httpOnly;expires=${getCookieExprise()}`);
        }
        res.end(
          JSON.stringify(blogData)
        );
      });
    }
  });
}

module.exports = handleServer;
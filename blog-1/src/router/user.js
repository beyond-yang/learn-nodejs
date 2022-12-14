const { login } = require('../controller/user');
const { set } = require('../db/redis');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleUserRouter = (req, res) => {
  const { method, url, path } = req;
  // 路由
  // const path = url.split('?')[0];
  if (method === 'POST' && path === '/api/user/login') {
    const { username, password } = req.body;
    // const { username, password } = req.query;

    const result = login(username, password);
    return result.then((resultData) => {
      const {username, realname} = resultData;
      if (username) {
        req.session.username = username;
        req.session.realname = realname;
        // 同步到 redis 中
        console.log('session', req.session);
        console.log('sessionid', req.sessionid);
        set(req.sessionid, req.session);
        return new SuccessModel('登录成功');
      }
      return new ErrorModel('登录失败');
    });
  }

  if (method === 'GET' && path === '/api/user/login-test') {
    const { username } = req.session;
    if (username) {
      return Promise.resolve(new SuccessModel({
        session: req.session
      }), '已登录');
    }
    return Promise.resolve(new ErrorModel('未登录'));
  }
};

module.exports = handleUserRouter;
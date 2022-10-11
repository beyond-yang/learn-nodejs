const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const { getCookieExprise } = require('../utils/common');

const handleUserRouter = (req, res) => {
  const { method, url, path } = req;
  // 路由
  // const path = url.split('?')[0];
  if (method === 'GET' && path === '/api/user/login') {
    // const { username, password } = req.body;
    const { username, password } = req.query;

    const result = login(username, password);
    return result.then((resultData) => {
      const {username} = resultData;
      if (username) {
        // 服务端修改 cookie
        res.setHeader('Set-Cookie', `username=${username};path=/;httpOnly;expires=${getCookieExprise()}`);
        return new SuccessModel('登录成功');
      }
      return new ErrorModel('登录失败');
    });
  }

  if (method === 'GET' && path === '/api/user/login-test') {
    const { username } = req.cookie;
    if (username) {
      return Promise.resolve(new SuccessModel({
        username
      }), '已登录');
    }
    return Promise.resolve(new ErrorModel('未登录'));
  }
};

module.exports = handleUserRouter;
const { loginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
  const { method, url } = req;
  // 路由
  // const path = url.split('?')[0];
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const result = loginCheck(username, password);
    return result.then((resultData) => {
      const {username} = resultData;
      console.log('username', username);
      if (username) {
        return new SuccessModel('登录成功');
      }
      return new ErrorModel('登录失败');
    });
  }
};

module.exports = handleUserRouter;
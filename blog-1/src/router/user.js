const { loginCheck } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');
const handleUserRouter = (req, res) => {
  const { method, url } = req;
  // 路由
  // const path = url.split('?')[0];
  if (method === 'POST' && req.path === '/api/user/login') {
    const { username, password } = req.body;
    const success = loginCheck(username, password);
    if (success) {
      return new SuccessModel('登录成功');
    }
    return new ErrorModel('登录失败');
  }
};

module.exports = handleUserRouter;
const handleUserRouter = (req, res) => {
  const { method, url } = req;
  // 路由
  // const path = url.split('?')[0];
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: '这是登录接口'
    }
  }
};

module.exports = handleUserRouter;
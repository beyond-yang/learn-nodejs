var express = require('express');
var router = express.Router();
const { login } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;

    const result = login(username, password);
    return result.then((resultData) => {
      const {username, realname} = resultData;
      if (username) {
        req.session.username = username;
        req.session.realname = realname;
        res.json(
          new SuccessModel('登录成功')
        );
        return;
      }
      res.json(
        new ErrorModel('登录失败')
      );
    });
});

router.get('/login-test', (req, res, next) => {
  if (req.session.username) {
    res.json({
      error: 0,
      msg: '登录成功',
      data: req.session,
    });
    return;
  }
  res.json(
    {
      error: -1,
      msg: '未登录',
      data: req.session,
    }
  );
});

// router.get('/session-test', (req, res, next) => {
//   const session = req.session;
//   if (!session.viewNum) {
//     session.viewNum = 0;
//   }
//     session.viewNum ++;
  
//   res.json({
//     viewNum: session.viewNum,
//   });
// });

module.exports = router;

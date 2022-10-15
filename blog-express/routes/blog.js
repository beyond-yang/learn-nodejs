var express = require('express');
var router = express.Router();

const { SuccessModel, ErrorModel } = require('../model/resModel');
const { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBolg,
} = require('../controller/blog');

router.get('/list', function(req, res, next) {
  let { author, keyword } = req.query;
    // return new SuccessModel(getList(author, keyword), '获取博客列表成功');
    // if (req.query.isadmin) {
    //   const loginCheckResult = loginCheck(req);
    //   if (loginCheckResult) {
    //     return loginCheckResult;
    //   }
    //   // 强制查询自己的博客
    //   author = req.session.username;
    // }
    const result = getList(author, keyword);
    return result.then((listData) => {
      res.json(
        new SuccessModel(listData, '博客列表获取成功')
      );
    });
});

module.exports = router;

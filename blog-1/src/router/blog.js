const { SuccessModel, ErrorModel } = require('../model/resModel');
const { getList, getDetail } = require('../controller/blog');

const handleBlogRouter = (req, res) => {
  const { method, url } = req;
  // 路由
  // const path = url.split('?')[0];
  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const { author, keyword } = req.query;
    return new SuccessModel(getList(author, keyword), '获取博客列表成功');
  }
  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const { id } = req.query;
    return new SuccessModel(getDetail(id), '博客详情获取成功');
  }
  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    return {
      msg: '这是新建博客的接口'
    }
  }
  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口'
    }
  }
  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
};

module.exports = handleBlogRouter;
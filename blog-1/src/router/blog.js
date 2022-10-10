const { SuccessModel, ErrorModel } = require('../model/resModel');
const { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
} = require('../controller/blog');

const handleBlogRouter = (req, res) => {
  const { method, url } = req;
  const { id } = req.query;
  // 路由
  // const path = url.split('?')[0];
  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const { author, keyword } = req.query;
    return new SuccessModel(getList(author, keyword), '获取博客列表成功');
  }
  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    return new SuccessModel(getDetail(id), '博客详情获取成功');
  }
  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    return new SuccessModel(newBlog(req.body));
  }
  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const success = updateBlog(id, req.body);
    if (success) {
      return new SuccessModel('博客更新成功');
    } else {
      return new ErrorModel('博客更新失败');
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
const { SuccessModel, ErrorModel } = require('../model/resModel');
const { 
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBolg,
} = require('../controller/blog');

const handleBlogRouter = (req, res) => {
  const { method, url } = req;
  const { id } = req.query;
  // 路由
  // const path = url.split('?')[0];
  // 获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list') {
    const { author, keyword } = req.query;
    // return new SuccessModel(getList(author, keyword), '获取博客列表成功');
    const result = getList(author, keyword);
    return result.then((listData) => {
      return new SuccessModel(listData, '博客列表获取成功');
    });
  }
  // 获取博客详情
  if(method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id);
    return result.then((blogDetail) => {
      return new SuccessModel(blogDetail, '博客详情获取成功');
    });
  }
  // 新建博客
  if(method === 'POST' && req.path === '/api/blog/new') {
    const author = 'yangjing';
    req.body.author = author;
    const result = newBlog(req.body);
    return result.then((resultObj) => {
      return new SuccessModel(resultObj);
    });
  }
  // 更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    return result.then((resultData) => {
      if (resultData) {
        return new SuccessModel('博客更新成功');
      } else {
        return new ErrorModel('博客更新失败');
      }
    });  
  }
  // 删除博客
  if(method === 'POST' && req.path === '/api/blog/del') {
    const author = 'yangjing';
    const result = delBolg(id, author);
    return result.then((resultData) => {
      if (resultData) {
        return new SuccessModel('博客删除成功');
      }
      return new ErrorModel('博客删除失败');
    });
  }
};

module.exports = handleBlogRouter;
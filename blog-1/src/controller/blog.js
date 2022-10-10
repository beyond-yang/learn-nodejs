const { exec } = require('../db/mysql');
/**
 * 获取博客列表
 * @param {*} author 作者
 * @param {*} keyword 搜索关键字
 * @returns 博客列表数据
 */
const getList = (author, keyword) => {
  let sql = 'select * from blogs where 1=1 ';
  if (keyword) {
    console.log('啦啦啦', keyword);
    sql += `and title like '%${keyword}%' `;
  }
  if (author) {
    sql += `and author = '${author}' `;
  }
  sql += `order by createtime desc;`;
  return exec(sql);
};

/**
 * 获取博客详情
 * @param id 博客id
 */
const getDetail = (id) => {
  return {
    id: 1,
    title: 'nodejs 教程',
    content: '好好学习天天向上',
    author: '小杨'
  }
};

/**
 * 新建博客
 * @param blogData 博客数据
 */
const newBlog = (blogData = {}) => {
  // blogData 博客对象
  console.log('newBlog', blogData);
  return {
    id: 3,
  };
};

/**
 * 更新博客
 * @param {*} id 博客id
 * @param {*} blogData 博客数据
 */
const updateBlog = (id, blogData = {}) => {
  // blogData 是要更新的博客对象
  console.log('updateBlog', id, blogData);
  return false;
};

/**
 * 删除博客
 * @param id
 */
const delBolg = (id) => {
  // 假数据，返回 true 表示删除成功
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBolg,
};
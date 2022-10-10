/**
 * 获取博客列表
 * @param {*} author 作者
 * @param {*} keyword 搜索关键字
 * @returns 博客列表数据
 */
const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: 'nodejs 教程',
      content: '前端必选课程 nodejs',
      createTime: 12203735,
      author: '双越',
    },
    {
      id: 2,
      title: 'JavaScript 教程',
      content: '前端必选课程 JavaScript',
      createTime: 868893735,
      author: '杨静',
    }
  ];
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
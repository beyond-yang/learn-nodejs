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

module.exports = {
  getList,
  getDetail,
};
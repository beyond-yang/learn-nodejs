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

module.exports = {
  getList,
};
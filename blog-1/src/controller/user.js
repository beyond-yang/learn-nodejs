/**
 * 登录验证
 * @param username 用户名
 * @param password 密码
 * @returns 
 */
const loginCheck = (username, password) => {
  if (username === 'yangjing' && password === '123') {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};
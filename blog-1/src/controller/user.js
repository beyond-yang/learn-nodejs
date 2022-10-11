const { exec } = require('../db/mysql');
/**
 * 登录验证
 * @param username 用户名
 * @param password 密码
 * @returns 
 */
const loginCheck = (username, password) => {
  const sql = `select username, realname from users where username='${username}' and password='${password}';`;
  return exec(sql).then((rows) => {
    return rows[0] || {};
  });
};

module.exports = {
  loginCheck,
};
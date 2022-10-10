const mysql = require('mysql');
const { SQL_CONFIG } = require('../config/db');

// 创建连接对象
const con = mysql.createConnection(SQL_CONFIG);

// 连接数据库
con.connect();

/**
 * 执行sql语句
 * @param sql sql语句
 */
const exec = (sql) => {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
  return promise;
};

module.exports = {
  exec,
}
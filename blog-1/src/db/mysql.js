const mysql = require('mysql');
const { SQL_CONFIG } = require('../config/db');

// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '13933930379j',
  port: '3306',
  database: 'myblog-v2',
});

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
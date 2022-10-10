const mysql = require('mysql');

// 创建连接对象
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '13933930379j',
  port: '3306',
  database: 'myblog-v2',
});

// 开始连接
con.connect();

// sql 语句
const sql = "select * from users";
// 查询
con.query(sql, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 关闭连接
con.end();

const env = process.env.NODE_ENV;

let SQL_CONFIG;

if (env === 'dev') {
  SQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '13933930379j',
    port: '3306',
    database: 'myblog-v2',
  };
} else if (env === 'production') {
  SQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '13933930379j',
    port: '3306',
    database: 'myblog-v2',
  };
}

module.exports = SQL_CONFIG;
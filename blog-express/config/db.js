const env = process.env.NODE_ENV;

let SQL_CONFIG;
let REDIS_CONFIG;

if (env === 'dev') {
  SQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '13933930379j',
    port: '3306',
    database: 'myblog-v2',
  };
  REDIS_CONFIG = {
    port: 6379,
    host: '127.0.0.1',
  };
} else if (env === 'production') {
  SQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '13933930379j',
    port: '3306',
    database: 'myblog-v2',
  };

  REDIS_CONFIG = {
    port: 6379,
    host: '127.0.0.1',
  };
}

module.exports = {
  SQL_CONFIG,
  REDIS_CONFIG,
};
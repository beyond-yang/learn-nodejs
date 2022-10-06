/**
 * 此文件中的代码是和 server 的技术有关系的，app.js 是处理业务代码的地方
 */
const http = require('http');
const handleServer = require('../app');

const server = http.createServer(handleServer);

server.listen(8000, () => {
  console.log('server is running');
});
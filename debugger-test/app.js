// 引入了 http 模块
const http = require('http');
// 使用 http 模块创建了一个 http 服务
const server = http.createServer((req, res) => {
  // 返回 200，内容类型为文本
  res.writeHead(200, {'content-type': 'text/html'});
  // 返回内容
  res.end('<h1>hello world11</h1>');
});
// 监听 300 端口
server.listen(3000, () => {
  console.log('server is running');
});
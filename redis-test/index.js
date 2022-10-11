const redis = require('redis');

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.on('error', (error) => {
  console.error(error);
});

// 使用 set 设置，使用 get 获取
redisClient.set('username', 'yangjing', redis.print);
redisClient.get('username', (err, val) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('username', val);

  // 退出
  redisClient.quit();
});

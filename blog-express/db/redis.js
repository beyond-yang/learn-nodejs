const redis = require('redis');
const { REDIS_CONFIG } = require('../config/db');

const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.on('error', (err) => {
  console.error('222', err);
});


module.exports = {
  redisClient,
};
const redis = require('redis');
const { REDIS_CONFIG } = require('../config/db');

const redisClient = redis.createClient(6379, '127.0.0.1');

redisClient.on('error', (err) => {
  console.error('222', err);
});

/**
 * set
 * @param name 属性名
 * @param value 属性值
 */
const set = (name, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  redisClient.set(name, value);
}

/**
 * get
 * @param key 属性值
 */
const get = (key) => {
  const promise = new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err);
        return;
      }
      if (val === null) {
        resolve(null);
        return;
      }
      try {
        resolve(
          JSON.parse(val)
        );
      } catch (ex) {
        resolve(val);
      }
    });
  });
  return promise;
}

module.exports = {
  set,
  get,
};
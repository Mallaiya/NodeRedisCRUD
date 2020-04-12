const Redis = require('ioredis');

const { localhost, port, password } = process.env;

const redisClient = new Redis({ localhost, port, password });

redisClient.on('connect', () => {
  console.log('Redis Client Connected');
});

module.exports = redisClient;
const redisClient = require('../drivers/redis');
module.exports = async (payload) => {
  const { task } = payload;
  const res = await redisClient.rpush('tasks', task);
  return res;
};

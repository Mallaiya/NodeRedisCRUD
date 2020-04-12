const redisClient = require('../drivers/redis');
module.exports = async () => {
  const tasks = await redisClient.lrange('tasks', 0, -1);
  const contact = await redisClient.hgetall('contact');
  return {tasks, contact};
};

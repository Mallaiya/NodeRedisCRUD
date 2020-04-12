const redisClient = require('../drivers/redis');
module.exports = async (payload) => {
  let tasks  = payload.tasks;
  if(typeof tasks === 'string'){
    tasks = [tasks];
  }
  let res = null;
  const taskList = await redisClient.lrange('tasks', 0, -1);
  for (let i = 0; i < tasks.length; i++) {
    if (taskList.indexOf(tasks[i]) > -1) {
      res = await redisClient.lrem('tasks', 0, tasks[i]);
    }
  }
  return res;
};

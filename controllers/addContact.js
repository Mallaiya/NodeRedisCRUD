const redisClient = require('../drivers/redis');
module.exports = async (payload) => {
    const {email, name} = payload;
    const response = await redisClient.hmset('contact', ['email', email, 'name', name])
    return response;
}
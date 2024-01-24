const dotenv = require('dotenv');
dotenv.config();

exports.load = () => {
    return {
        bot_token: process.env.BOT_TOKEN,
        api_url: process.env.API_URL
    }
}
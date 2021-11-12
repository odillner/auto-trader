const Telegraf = require('telegraf');
const config = require('./utils/config')


const worker = new Telegraf(config.TELEGRAM_BOT_TOKEN);
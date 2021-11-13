const {Telegraf} = require('telegraf')
const config = require('./util/config')

const bot = new Telegraf(config.TELEGRAM_TOKEN)

bot.start((ctx) => ctx.reply('Welcome'))

bot.hears('trade', (ctx) => ctx.reply('fuck you'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
require('dotenv').config()

let PORT = process.env.PORT
let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

module.exports = {
    PORT,
    TELEGRAM_BOT_TOKEN
}

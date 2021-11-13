require('dotenv').config()

let PORT = process.env.PORT
let TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN

module.exports = {
    PORT,
    TELEGRAM_TOKEN
}

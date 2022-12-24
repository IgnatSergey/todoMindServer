const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

const events = require('events');
const emitter = new events.EventEmitter();

bot.on('message', (msg) => {
    emitter.emit('registrateTg', { chatId: msg.chat.id, text: msg.text });
})

module.exports = {bot, emitter};
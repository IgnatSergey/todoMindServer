const { emitter, bot } = require('../telegramBot/telegramBot.js');

class UserController {
    async getChatId(ctx) {
        const { password } = ctx.request.body;
        const promise = new Promise((resolve) => {
            emitter.on('registrateTg', ({ chatId, text }) => {
                if (text === password) {
                    ctx.body = chatId;
                    bot.sendMessage(chatId, `вы подписанны на получение уведомлений`);
                    resolve();
                }
            })
        })
        await promise;
    }
}

module.exports = new UserController();
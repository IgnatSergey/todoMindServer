const ApiError = require('../error/ApiError');
const {bot} = require('../telegramBot/telegramBot.js')

const dateOption = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
}

class TaskController {
    async addTask(ctx) {
        const { description, date, readinessStatus } = ctx.request.body.task;
        const { isSubscribe, chatId } = ctx.request.body;
        if (!description) {
            throw ApiError.badRequest('Не задано описание задачи');
        }
        ctx.body = { description, date, readinessStatus };
        if (isSubscribe) {
            bot.sendMessage(chatId, `Добавлена задача: ${description}.\nСтату: ${readinessStatus ? "" : "не"} выполнена`);
        }
    }

    async changeStatusTask(ctx) {
        const { description, date, readinessStatus } = ctx.request.body.task;
        const { isSubscribe, chatId } = ctx.request.body;
        ctx.body = { description, date, readinessStatus };
        if (isSubscribe) {
            bot.sendMessage(chatId, `Изменен статус задачи: ${description}\nот ${new Date(date).toLocaleString("ru", dateOption)}\nна: ${readinessStatus ? "" : "не"} выполнено`);
        }
    }

    async deleteTask(ctx) {
        const { description, date, readinessStatus } = ctx.request.body.task;
        const { isSubscribe, chatId } = ctx.request.body;
        ctx.body = { description, date, readinessStatus };
        if (isSubscribe) {
            bot.sendMessage(chatId, `Задача: ${description}\nот ${new Date(date).toLocaleString("ru", dateOption)}\nудалена`);
        }
    }
}

module.exports = new TaskController();
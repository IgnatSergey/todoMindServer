const ApiError = require('../error/ApiError');

module.exports = function () {
    return async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            if (err instanceof ApiError) {
                ctx.status = err.status;
                ctx.body = { message: err.message };
            }
            else {
                ctx.status = 500;
                ctx.body = { message: "500 Internal Server Error" };
            }
        }
    }
}
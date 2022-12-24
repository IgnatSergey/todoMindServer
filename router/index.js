const Router = require('koa-router');
const router = new Router();
const taskController = require('../controllers/taskControllers');
const userController = require('../controllers/userControllers');

router.post('/api/task', taskController.addTask);
router.put('/api/task/delete', taskController.deleteTask);
router.put('/api/task', taskController.changeStatusTask);

router.post('/api/chatId', userController.getChatId);

module.exports = router;
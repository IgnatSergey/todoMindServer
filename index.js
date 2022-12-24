require('dotenv').config();
const koa = require('koa');
const { koaBody } = require('koa-body');
const router = require('./router/index.js');
const cors = require('koa-cors');
const errorHandler = require('./middleware/ErrorHandingMiddleware');

const PORT = process.env.PORT || 7000;
const app = new koa();

app.use(errorHandler());
app.use(koaBody());
app.use(cors());
app.use(router.routes());

app.listen(PORT, () => console.log(`work ${PORT}`));

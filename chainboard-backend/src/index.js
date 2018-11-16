require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
//const api = require('./api');

const app = new Koa();
const router = new Router();

const {
  PORT: port = 4000, 
  MONGO_URI: mongoURI,
} = process.env;


mongoose.Promise = global.Promise; // Node의 Promise를 사용하도록 설정
mongoose.connect(mongoURI).then(() => {
  console.log('connected to mongodb');
}).catch((e) => {
  console.error(e);
});

app.use(bodyParser());

// 라우터 설정
//router.use('/api', api.routes()); // api 라우트 적용



// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log('listening to port', port);
});
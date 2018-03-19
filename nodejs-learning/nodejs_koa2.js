'use strict'

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, Koa2</p>';
});

app.listen(8888);
console.log('app started at port:8888...');
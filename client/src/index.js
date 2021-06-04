const Koa = require('koa');
const serve = require('koa-static');
const send = require('koa-send');

const app = new Koa();
app.use(serve(__dirname + '/src'));

app.use(async (ctx) => {
  if(ctx.status === 404) await send(ctx, 'index.html', { root: __dirname + '/' });
});

const server = app.listen(4000, () => {
    console.log('Test server is listening to port 4000');
});



/**
 * Created by apple on 17/3/4.
 */

const Koa = require('koa');
const app = new Koa();



app.use(ctx => {
    ctx.body = 'hello Koa';
});

app.listen(3000);
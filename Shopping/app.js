import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import postsRouter from './router/posts.router.js';

const app=new Koa();
app.use(bodyparser());

app.use(postsRouter.routes)
.use(postsRouter.allowedMethods);

app.use.apply(ctx=>{
    ctx.set('Content-Type', 'text/html');
    ctx.body='hello world';
    ctx.status=404;
    
});


app.listen(3100, ()=>{
    console.log('Application running on port 3100')
});
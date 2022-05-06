import Router from '@koa/router';
import {get,save} from '../api/posts.api.js';
const postsRouter=new Router({
    prefix:'/posts'
});

postsRouter.post('',(ctx)=>{
 const data= ctx.reqest.body;
 const post=save(data);
 ctx.set('Content-Type','application.json');
 ctx.status=201;

});


postsRouter.get('/:id',(ctx)=>{
    const id= ctx.params.id;
    const post=get(id);
    ctx.set('Content-Type','application.json');
    ctx.status=200;
   
   });

   


export default postsRouter;
const Koa=require('koa')
const views=require('koa-views')
const router=require('koa-router')()
const static=require('koa-static')
const app=new Koa()
const fs=require('fs')
const path=require('path')
let {cwd,argv}=process
let url=argv[2] ? argv[2].slice(1)+'/' : './public/'
app.use(static(path.join(cwd(),url)))
// app.use(static(path.join(cwd(),argv[2]&&argv[2].slice(1)))) 
// app.use(async (ctx,next)=>{

// })

const query=require('./db/index')

app.use(router.routes())
app.use(router.allowedMethods())
router.get('/list',async (ctx,next)=>{
   let data= await query()
    ctx.body={
        code:1,
        data
    }
})

app.listen(8080,()=>{console.log('端口为'+8080)})
// module.exports=app
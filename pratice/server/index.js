const Koa=require('koa')
const views=require('koa-views')
const router=require('koa-router')()
const static=require('koa-static')
const app=new Koa()
const fs=require('fs')
const path=require('path')
let {cwd,argv}=process

app.use(static(path.join(cwd())))
// app.use(static(path.join(cwd(),argv[2]&&argv[2].slice(1)))) 
// app.use(async (ctx,next)=>{

// })
router.get('/list',async (ctx,next)=>{
    ctx.body=[1,2,3]
})

app.listen(8080,()=>{console.log('端口为'+8080)})
// module.exports=app
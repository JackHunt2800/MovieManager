import Koa from 'koa'
import './dal/index.js'
import bodyParser from 'koa-bodyparser'
import MovieRouter from './router/movieM.routes.js'

const app=new Koa()
app.use(bodyParser())

//handling cors without installing koa-cors
app.use(async(ctx,next)=>{
    ctx.response.set('Access-Control-Allow-Origin', 'http://localhost:1234')
    ctx.response.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE')
    ctx.response.set('Access-Control-Allow-Headers','*')
    await next()
})


app.use(MovieRouter.routes())
.use(MovieRouter.allowedMethods())

app.listen(3000,()=>{
    console.log("Application running on port 3000")
})

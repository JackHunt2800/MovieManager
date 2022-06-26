import Koa from 'koa'
import './dal/index.js'
import bodyParser from 'koa-bodyparser'
import MovieRouter from './router/movieM.routes.js'

const app=new Koa()
app.use(bodyParser())

app.use(MovieRouter.routes())
.use(MovieRouter.allowedMethods())

app.listen(3000,()=>{
    console.log("Application running on port 3000")
})

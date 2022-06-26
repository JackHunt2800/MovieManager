import Router from '@koa/router'
import { saveMovie,getMovies,getMovieById,updateMovie,deleteMovie } from '../api/movieM.api.js'

const router=new Router({
    prefix:'/movies'
})

//insert
router.post('/',async (ctx)=>{
    let post=ctx.request.body;
    post=await saveMovie(post)
    ctx.response.status=201
    ctx.body=post;
})

//getAll
router.get('/',async (ctx)=>{
    let post=await getMovies();
    ctx.body=post;
    ctx.set('content-type','application/json')
})

//getById
router.get('/:id',async (ctx)=>{
    let id=ctx.params.id
    ctx.body=await getMovieById(id)
    ctx.response.status=200
})

//update
router.put('/:id',async (ctx)=>{
    let id=ctx.params.id
    ctx.body=await updateMovie(id,ctx.request.body)
    ctx.response.status=200
})

//delete
router.delete('/:id',async (ctx)=>{
    let id=ctx.params.id
    ctx.body=await deleteMovie(id)
    ctx.response.status=204
})



export default router
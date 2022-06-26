import { save,getAll,getById,updateById,removeById } from "../dal/movieM.dao.js";


export const saveMovie=async({name,rating,type,rDate,status,genre})=>{

    const post={
        name,
        rating,
        type,
        rDate,
        status,
        genre
    }
    post.id=await save(post)
    return post;

}

//get all movies
export const getMovies=async()=>{
    return await getAll()
}

export const getMovieById=async(id)=>{

    const post=await getById(id);
    if(!post){
        throw new Error(`Not found for the id ${id}`)
    }

    return post

}

//update movie
export const updateMovie=async(id,{name,rating,type,rDate,status,genre})=>{
    //checking if the doc exist before updating
    const post=await getById(id);
    if(!post){
        throw new Error(`Not found for the id ${id}`)
    }
    
    return await updateById(id,{name,rating,type,rDate,status,genre})

}

//delete movie
export const deleteMovie=async(id)=>{
    const post=await getById(id);
    if(!post){
        throw new Error(`Not found for the id ${id}`)
    }

    return await removeById(id)

}


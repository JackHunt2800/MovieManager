import { ObjectId } from "mongodb";
import client from "./index.js";

const collection=client.db('movieManager').collection('movies')

//insert
export const save=async(post)=>{
    const inserted=await collection.insertOne({...post})
    return inserted.insertedId
}

//get all data
export const getAll=async()=>{
    const data=await collection.find().toArray();
    return data;

}

//get data by id
export const getById=async(id)=>{

    const doc=await collection.findOne({_id:ObjectId(id)})
    return doc;

}

//update data by ID
export const updateById=async(findId,post)=>{
    const obId=await collection.findOne({_id:ObjectId(findId)})
    const {_id:id}=obId
    const result=await collection.replaceOne({id},{...post})
    return result 
}

//delete data by ID
export const removeById=async(findId)=>{
    const obId=await collection.findOne({_id:ObjectId(findId)})
    const {_id:id}=obId
    const result=await collection.deleteOne(id)
    return result;

}














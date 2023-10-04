import mongoose from "mongoose";
import dbConnect from "@/components/db/connectdb";
import Blog from "@/components/db/model";

export default async function handler(req, res) {
    try {
  
      await dbConnect();
    const data= await Blog.find({}).sort({createdAt:-1}).limit(3)

    res.status(201).json(data)


    }catch(err){
        res.status(500).send({error:err})
    }
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



import mongoose from 'mongoose';
import Blog from '@/components/db/model';
import dbConnect from '@/components/db/connectdb';
const mongoURI = process.env.MONGODB_URI;



export default async function handler(req, res) {
    if(req.method=="POST"){
  try {

    await dbConnect();
    let {blog}=req.body;
    console.log(blog)
    const data=new Blog(blog)
    await data.save()
    res.status(201).send({message:"posted successfully"})
    // Rest of your API route logic...
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}else{
    res.status(405).send({error:"wrong method"})
}
}

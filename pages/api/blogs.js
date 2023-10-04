// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



import mongoose from 'mongoose';
import Blog from '@/components/db/model';
import dbConnect from '@/components/db/connectdb';
const mongoURI = process.env.MONGODB_URI;



export default async function handler(req, res) {
  try {

    await dbConnect();
    
    let data=await Blog.find({})
    let allCount=data.length
    data=data.slice(0,parseInt(req.query.count)+2)
    res.status(200).json({allblogs:data,allCount})
    // Rest of your API route logic...
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// export default async function handler(req, res) {
    
//     try {
//         console.log("hello api")
//         console.log(mongoose.connection.readyState)
//         await connectToDatabase();
//         console.log("after")
//         const collection=db.collection('blogs')
//         let data = await collection.find({}).toArray()
        
//         console.log(data)
     
//     // let data=await fs.promises.readdir("blogdata")
//     let allCount=data.length
//     // data=data.slice(parseInt(req.query.count),parseInt(req.query.count)+2)
//     data=data.slice(0,parseInt(req.query.count)+2)
//     let myfile;
//     // let allblogs=[]
//     // forEach method only accepts a synchronous function, and therefore is NOT compatible with the async/await syntax.
//     // for(let item of data){
//     //             myfile=await fs.promises.readFile('blogdata/'+item,'utf-8')
//     //             allblogs.push(JSON.parse(myfile))

//     // }
//     // console.log(allblogs) 
//     res.status(200).json({allblogs:data,allCount})
      
// }catch(e){
//     res.status(500).json({error:"some error"})
// }
// }



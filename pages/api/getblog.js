// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import Blog from '@/components/db/model'
export default async function handler(req, res) {
  console.log(req.query.slug)

  try{
  const data=await Blog.findOne({slug:req.query.slug})
  // console.log(data)
  res.status(200).json(data)

}catch(err){
  
  return res.status(500).json({error:"No such blog found"})

  }
}




import { connectDB } from "../../../util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse){
       let session:any = await getServerSession(req,res,authOptions)
      req.body=JSON.parse(req.body)
  
      let save={
        comment:req.body.comment,
        parent: new ObjectId(req.body._id),
        author: session.user.email
    }
      
 if(session){
      if (req.method == 'POST'){
        const db = (await connectDB).db("arsenal")
        let result= await db.collection('comment').insertOne(save)
      
        res.status(200).redirect('/list')
      }
    }else{
        res.status(500).json('로그인해주세요')
     
    }
    }
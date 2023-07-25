import { connectDB } from "../../../util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res){
     
      if (req.method == 'DELETE'){
        let session = await getServerSession(req,res,authOptions)

        const db = (await connectDB).db('arsenal')
        let pp = await db.collection('comment').findOne({ _id : new ObjectId(req.body) })
         console.log(pp.author) 
        // console.log(`${session.user.email}***************${found.author}`) 

        if(pp.author == session.user.email){
          let result= await db.collection('comment').deleteOne({_id:new ObjectId(req.body)})
          return res.status(200).redirect('/list')
        }else{
          return res.status(500).json('작성자와 맞지 않았습니다.').redirect('/list')
        }

        
      }
    }
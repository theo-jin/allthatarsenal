import { connectDB } from "../../../util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    req.body=JSON.parse(req.body)
   
      if (req.method == 'POST'){
        
        const db = (await connectDB).db('arsenal')
        let result= await db.collection('comment').updateOne({_id : new ObjectId(req.body._id)}, 
        { $set : {comment:req.body.comment} } ); 
        res.redirect(302,'/list')
    }
}
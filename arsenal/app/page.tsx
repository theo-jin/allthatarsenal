import { connectDB } from "../util/database"
import { MongoClient } from "mongodb"

export default async function App() {
  
  const client=await connectDB;
  const db = client.db('arsenal');
  let result = await db.collection('PlayerList').find().toArray();
  console.log(result)
  return (
   
    <div>
      {result[0].name}
      {result[1].name}
      {result[2].name}
      
    </div>
  )
}
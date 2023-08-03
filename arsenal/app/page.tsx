import Wallpaper from "./components/Wallpaper"
import { connectDB } from "../util/database"
import { MongoClient } from "mongodb"

export default async function App() {
  
  const client=await connectDB;
  const db = client.db('arsenal');
  let result:any = await db.collection('wallpaper').find().toArray();

  return (
   
   
       <Wallpaper result={result}/>
   
  )
}

import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb"
import Chart from "./Chart"


export default async function App(props) {
  const client=await connectDB;
  const db = client.db('arsenal');
  let result = await db.collection('PlayerList').findOne({_id:new ObjectId(props.params.id)})
console.log(result)
    return (
      <>
      <Chart result={result}/>   
    </>
    )
  }
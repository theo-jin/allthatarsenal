
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb"
import Chart from "./Chart"
import Biography from "./Biography"
import Info from "./Info"
export default async function App(props) {
  const client=await connectDB;
  const db = client.db('arsenal');
  let result = await db.collection('PlayerList').findOne({_id:new ObjectId(props.params.id)})

    return (
      <>
      <Info result={result}/>
      <Chart result={result}/>
    </>
    )
  }
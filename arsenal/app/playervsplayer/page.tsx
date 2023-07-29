import Chart from "./Chart"
import { connectDB } from "../../util/database";
export default async function App() {
    const client = await connectDB;
    const db = client.db('arsenal');
    let result = await db.collection('PlayerList').find().toArray();
 
    return (
        <div>
  <Chart result={result}/>
      </div>
      )
    }


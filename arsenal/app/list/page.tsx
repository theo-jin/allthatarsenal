import PlayerCard from "./listItem"
import { connectDB } from "../../util/database";

export default async function list(){
   const client = await connectDB;
   const db = client.db('arsenal');
   let result = await db.collection('PlayerList').find().toArray();

    return (
        <div>
          <PlayerCard result={result} />
        </div>
       
        );
}
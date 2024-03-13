
import { connectDB } from "../../../../util/database";
import { ObjectId } from "mongodb"

import Info from "./Info"
import Comment from "./Comment";
import Chart from "./Chart";

export default async function App(props: any) {
    const client = await connectDB;
    const db = client.db('arsenal');
    let player= await db.collection('PlayerList').findOne({ _id: new ObjectId(props.params.id) })
    
    return (
        <>
            <Info player={player} />
            <Chart player={player} />
            <Comment player={player} />
        </>
    )
}

import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb"
import Chart from "./Chart"
import Info from "./Info"

export default async function App(props: any) {
    const client = await connectDB;
    const db = client.db('arsenal');
    let player: any = await db.collection('PlayerList').findOne({ _id: new ObjectId(props.params.id) })

    return (
        <>
            <Info player={player} />

        </>
    )
}
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb"
import Chart from "./Chart"
import Info from "./Info"
import Describe from "./Describe"
import Comments from "./Comments"

export default async function App(props: any) {
    const client = await connectDB;
    const db = client.db('arsenal');
    let result: any = await db.collection('PlayerList').findOne({ _id: new ObjectId(props.params.id) })

    return (
        <>
            <Info result={result} />
            <Chart result={result} />
            <Describe result={result} />
            <Comments result={result} />
        </>
    )
}
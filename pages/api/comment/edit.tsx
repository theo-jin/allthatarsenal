import { connectDB } from "../../../util/database"
import { ObjectId } from "mongodb"
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    req.body = JSON.parse(req.body)

    if (req.method == 'POST') {

        const db = (await connectDB).db('arsenal')
        let result = await db.collection('comment').updateOne({ _id: new ObjectId(req.body._id) },
            { $set: { comment: req.body.comment } });
        res.redirect(302, '/list')
    }
}


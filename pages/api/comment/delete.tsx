import { connectDB } from "../../../util/database"
import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingMessage } from "http";

export default async function handler(req: any | NextApiRequest | (IncomingMessage & { cookies: Partial<{ [key: string]: string; }>; }), res: NextApiResponse) {

    if (req.method == 'DELETE') {
        let session: any = await getServerSession(req, res, authOptions)

        const db = (await connectDB).db('arsenal')
        let pp: any = await db.collection('comment').findOne({ _id: new ObjectId(req.body) })

        if (pp.author == session.user.email) {
            let result = await db.collection('comment').deleteOne({ _id: new ObjectId(req.body) })

        } else {
            return( 
                res.status(500).json('작성자와 맞지 않았습니다.'))
        }


    }
}


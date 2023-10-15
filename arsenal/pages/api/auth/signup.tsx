import { connectDB } from "../../../util/database"
import bcrypt from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body)
    if (req.method === 'POST') {
        try {
            // 비밀번호 hash 처리
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash;

            const db = (await connectDB).db('arsenal');
            await db.collection('user_cred').insertOne(req.body);

            res.status(200).json({ message: 'User created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
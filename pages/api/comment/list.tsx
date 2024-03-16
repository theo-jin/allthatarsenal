import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const db = (await connectDB).db("arsenal");
	const id: any = req.query.id;
	let result = await db
		.collection("comment")
		.find({ parent: new ObjectId(id) })
		.toArray();
	res.status(200).json(result);
}

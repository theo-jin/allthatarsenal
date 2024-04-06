import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const db = (await connectDB).db("arsenal");
	let WallPaper = await db.collection("WallPaper").find().toArray();
	res.status(200).json(WallPaper);
}

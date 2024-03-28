import { connectDB } from "../../../utils/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage } from "http";

export async function deleteHandler(
	req:
		| any
		| NextApiRequest
		| (IncomingMessage & { cookies: Partial<{ [key: string]: string }> }),
	res: NextApiResponse,
) {
	if (req.method == "DELETE") {
		let session: any = await getServerSession(req, res, authOptions);

		const db = (await connectDB).db("arsenal");
		let pp: any = await db
			.collection("comment")
			.findOne({ _id: new ObjectId(req.body) });

		if (pp.author == session.user.email) {
			let result = await db
				.collection("comment")
				.deleteOne({ _id: new ObjectId(req.body) });
		} else {
			return res.status(500).json("작성자와 맞지 않았습니다.");
		}
	}
}

export async function editHandler(req: NextApiRequest, res: NextApiResponse) {
	req.body = JSON.parse(req.body);

	if (req.method == "POST") {
		let session: any = await getServerSession(req, res, authOptions);
		const db = (await connectDB).db("arsenal");

		let pp: any = await db
			.collection("comment")
			.findOne({ _id: new ObjectId(req.body) });

		if (pp.author == session.user.email) {
			let result = await db
				.collection("comment")
				.updateOne(
					{ _id: new ObjectId(req.body._id) },
					{ $set: { comment: req.body.comment } },
				);
			res.redirect(302, "/list");
		}
	} else {
		return res.status(500).json("작성자와 맞지 않았습니다.");
	}
}

export async function listHandler(req: NextApiRequest, res: NextApiResponse) {
	const db = (await connectDB).db("arsenal");
	const id: any = req.query.id;
	let result = await db
		.collection("comment")
		.find({ parent: new ObjectId(id) })
		.toArray();
	res.status(200).json(result);
}

export async function newHandler(req: NextApiRequest, res: NextApiResponse) {
	let session: any = await getServerSession(req, res, authOptions);
	req.body = JSON.parse(req.body);

	let save = {
		comment: req.body.comment,
		parent: new ObjectId(req.body._id),
		author: session.user.email,
	};

	if (session) {
		if (req.method == "POST") {
			const db = (await connectDB).db("arsenal");
			let result = await db.collection("comment").insertOne(save);

			res.status(200).redirect("/list");
		}
	} else {
		res.status(500).json("로그인해주세요");
	}
}

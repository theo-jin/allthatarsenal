import { connectDB } from "@/utils/database";
import { NextApiRequest, NextApiResponse } from "next";
import { result } from "@/app/_types";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Failed (Code:405)" });
	}

	try {
		const { context } = req.body as { context: result };
		const client = await connectDB;
		const db = client.db("arsenal");

		// DB에서 정답 가져오기
		let [quizAnswer] = await db.collection("quizResult").find().toArray();

		const results = {
			step1: context.step1 === quizAnswer.step1,
			step2: context.step2 === quizAnswer.step2,
			step3: context.step3 === quizAnswer.step3,
			step4: context.step4 === quizAnswer.step4,
			step5: context.step5 === quizAnswer.step5,
		};

		// 정답 개수 계산
		const correctCount = Object.values(results).filter(Boolean).length;

		// 결과 반환
		return res.status(200).json({
			success: true,
			correctCount,
			results,
			totalQuestions: 5,
		});
	} catch (error) {
		console.error("Error on quiz results:", error);
		return res.status(500).json({
			success: false,
			message: "Error on quiz results (Code:500)",
		});
	}
}

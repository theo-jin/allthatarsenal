import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { context } = await req.json();
		const client = await connectDB;
		const db = client.db("arsenal");
		let [quizAnswer] = await db.collection("quizResult").find().toArray();

		const results = {
			step1: context.step1 === quizAnswer.step1,
			step2: context.step2 === quizAnswer.step2,
			step3: context.step3 === quizAnswer.step3,
			step4: context.step4 === quizAnswer.step4,
			step5: context.step5 === quizAnswer.step5,
		};
		const correctCount = Object.values(results).filter(Boolean).length;
		return NextResponse.json({
			success: true,
			correctCount,
			results,
			totalQuestions: 5,
		});
	} catch (error) {
		console.error("Error on quiz results:", error);
		return NextResponse.json(
			{
				success: false,
				message: "Error on quiz results (Code:500)",
			},
			{ status: 500 },
		);
	}
}

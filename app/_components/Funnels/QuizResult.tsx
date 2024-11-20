import { Suspense } from "react";
import { result } from "@/app/_types";
import { fetchResult } from "@/app/_actions/fetchQuiz";
import { LoadingSpiner } from "../LoadingSpiner";

async function QuizResultContent({ context }: { context: result }) {
	const quizRes = await fetchResult({ context });

	return (
		<div>
			<header>퀴즈 결과</header>
			<h1>정답 수: {quizRes.correctCount}개</h1>
			<div>
				<h2>상세 결과:</h2>
				{Object.entries(quizRes.results).map(([step, result]) => (
					<div key={step}>
						<p>
							{step}: {result ? "✅ 정답" : "❌ 오답"}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export function QuizResult({ context }: { context: result }) {
	return (
		<div>
			<Suspense
				fallback={
					<div className="flex items-center justify-center min-h-screen">
						<LoadingSpiner />
					</div>
				}
			>
				<QuizResultContent context={context} />
			</Suspense>
		</div>
	);
}

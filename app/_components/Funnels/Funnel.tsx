"use client";

import dynamic from "next/dynamic";
import { useFunnel } from "@use-funnel/browser";
import FunnelProgress from "./FunnelProgress";
import { QuizStep } from "./QuizStep";
import { QuizResult } from "./QuizResult";
import { QUIZ_STEPS, QuizContext, StepType } from "./types";

// 컴포넌트를 dynamic import로 감싸고 ssr을 false로 설정
const FunnelComponent = dynamic(() => Promise.resolve(FunnelContent), {
	ssr: false,
});

// 기존 Funnel 컴포넌트의 내용을 FunnelContent로 이동
function FunnelContent() {
	const funnel = useFunnel<QuizContext & { result: any }>({
		id: "my-funnel-app",
		initial: {
			step: "step1",
			context: {},
		},
	});

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="my-5">
				<FunnelProgress step={funnel.step as StepType} />
			</div>
			<div>
				<funnel.Render
					step1={({ history }) => (
						<QuizStep
							step={QUIZ_STEPS.step1}
							onNext={(step1) => history.push("step2", { step1 })}
						/>
					)}
					step2={({ history }) => (
						<QuizStep
							step={QUIZ_STEPS.step2}
							onNext={(step2) => history.push("step3", { step2 })}
							onPrev={() => history.push("step1")}
						/>
					)}
					step3={({ history }) => (
						<QuizStep
							step={QUIZ_STEPS.step3}
							onNext={(step3) => history.push("step4", { step3 })}
							onPrev={() => history.push("step2")}
						/>
					)}
					step4={({ history }) => (
						<QuizStep
							step={QUIZ_STEPS.step4}
							onNext={(step4) => history.push("step5", { step4 })}
							onPrev={() => history.push("step3")}
						/>
					)}
					step5={({ history }) => (
						<QuizStep
							step={QUIZ_STEPS.step5}
							onNext={(step5) => history.push("result", { step5 })}
							onPrev={() => history.push("step4")}
						/>
					)}
					result={({ context }) => <QuizResult context={context} />}
				/>
			</div>
		</div>
	);
}

// 메인 export 컴포넌트
export default function Funnel() {
	return <FunnelComponent />;
}

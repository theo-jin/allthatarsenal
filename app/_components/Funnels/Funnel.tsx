"use client";

import dynamic from "next/dynamic";
import type { result, step1, step2, step3, step4, step5 } from "@/app/_types";
import { useFunnel } from "@use-funnel/browser";
import FunnelProgress from "./FunnelProgress";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { QuizResult } from "./QuizResult";

// 컴포넌트를 dynamic import로 감싸고 ssr을 false로 설정
const FunnelComponent = dynamic(() => Promise.resolve(FunnelContent), {
	ssr: false,
});

// 기존 Funnel 컴포넌트의 내용을 FunnelContent로 이동
function FunnelContent() {
	const funnel = useFunnel<{
		step1: step1;
		step2: step2;
		step3: step3;
		step4: step4;
		step5: step5;
		result: result;
	}>({
		id: "my-funnel-app",
		initial: {
			step: "step1",
			context: {},
		},
	});

	return (
		<div className="">
			<div className="my-5">
				<FunnelProgress step={funnel.step} />
			</div>
			<div>
				<funnel.Render
					step1={({ history }) => (
						<Step1 onNext={(step1) => history.push("step2", { step1 })} />
					)}
					step2={({ history }) => (
						<Step2
							onNext={(step2) => history.push("step3", { step2 })}
							onPrev={() => history.push("step1")}
						/>
					)}
					step3={({ history }) => (
						<Step3
							onNext={(step3) => history.push("step4", { step3 })}
							onPrev={() => history.push("step2")}
						/>
					)}
					step4={({ history }) => (
						<Step4
							onNext={(step4) => history.push("step5", { step4 })}
							onPrev={() => history.push("step3")}
						/>
					)}
					step5={({ history }) => (
						<Step5
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

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const STEP_PROGRESS: { [key in StepType]: number } = {
	step1: 0,
	step2: 20,
	step3: 40,
	step4: 60,
	step5: 80,
	result: 100,
};

type StepType = "step1" | "step2" | "step3" | "step4" | "step5" | "result";

interface FunnelProgressProps {
	step: StepType;
}

export default function FunnelProgress({ step }: FunnelProgressProps) {
	const [progressValue, setProgressValue] = useState(0);

	useEffect(() => {
		setProgressValue(STEP_PROGRESS[step]);
	}, [step]);

	return (
		<div className="flex justify-center">
			<Progress value={progressValue} color="success" className="max-w-md" />
		</div>
	);
}

import { Progress } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function FunnelProgress({ step }: { step: string }) {
	const [progressValue, setProgressValue] = useState(0);
	useEffect(() => {
		if (step === "step1") {
			setProgressValue(0);
		} else if (step === "step2") {
			setProgressValue(20);
		} else if (step === "step3") {
			setProgressValue(40);
		} else if (step === "step4") {
			setProgressValue(60);
		} else if (step === "step5") {
			setProgressValue(80);
		} else if (step === "result") {
			setProgressValue(100);
		}
	}, [step]);
	return (
		<div className="flex justify-center">
			{" "}
			<Progress
				size="md"
				value={progressValue}
				color="success"
				className="max-w-md"
			/>
		</div>
	);
}

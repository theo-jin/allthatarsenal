"use client";

import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { QuizStepProps } from "./types";

export function QuizStep({ step, onNext, onPrev }: QuizStepProps) {
	const [selected, setSelected] = useState("");

	const isStep5 = step.options.length === 0;

	return (
		<div className="max-w-md mx-auto p-4">
			<header className="text-2xl font-bold mb-4">Quiz {step.question}</header>
			<div className="mb-4">{step.question}</div>
			{step.hint && (
				<div className="text-sm text-gray-500 mb-4">힌트: {step.hint}</div>
			)}

			{isStep5 ?
				<Input
					value={selected}
					onChange={(e) => setSelected(e.target.value)}
					placeholder="정답을 입력하세요"
					className="mb-4"
				/>
			:	<RadioGroup
					value={selected}
					onValueChange={setSelected}
					className="mb-4"
				>
					{step.options.map((option) => (
						<Radio key={option} value={option}>
							{option}
						</Radio>
					))}
				</RadioGroup>
			}

			<div className="flex justify-between">
				{onPrev && (
					<Button onClick={onPrev} color="default">
						이전
					</Button>
				)}
				<Button
					onClick={() => onNext(selected)}
					disabled={selected === ""}
					color="primary"
				>
					다음
				</Button>
			</div>
		</div>
	);
}

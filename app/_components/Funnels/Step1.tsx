"use client";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

interface Props {
	onNext: (step: string) => void;
}

export function Step1({ onNext }: Props) {
	const [selected, setSelected] = useState("");
	return (
		<div>
			<header>Quiz 1</header>
			<div>아스날의 연고지는 어디인가요?</div>
			<RadioGroup
				label="힌트: 아스날은 프리미어리그 소속이에요"
				value={selected}
				onValueChange={setSelected}
			>
				<Radio value="buenos-aires">Buenos Aires</Radio>
				<Radio value="sydney">Sydney</Radio>
				<Radio value="san-francisco">San Francisco</Radio>
				<Radio value="london">London</Radio>
				<Radio value="tokyo">Tokyo</Radio>
			</RadioGroup>
			<Button
				className="mt-5"
				onClick={() => onNext(selected)}
				disabled={selected === ""}
			>
				Next
			</Button>
		</div>
	);
}

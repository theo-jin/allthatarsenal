"use client";
import { contextProps } from "@/app/_types";
import { Button, Input, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export function Step5({ onNext, onPrev }: contextProps) {
	const [input, setInput] = useState("");

	return (
		<div>
			<header>Quiz 5 </header>
			<div>정확한 아스날의 철자를 영어 소문자로 써주세요</div>
			<Input value={input} onChange={(e) => setInput(e.target.value)} />

			<Button className="mt-5 mr-3" onClick={() => onPrev()}>
				Prev
			</Button>
			<Button
				className="mt-5"
				onClick={() => onNext(input)}
				disabled={input === ""}
			>
				Next
			</Button>
		</div>
	);
}

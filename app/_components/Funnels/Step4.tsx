"use client";
import { contextProps } from "@/app/_types";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export function Step4({ onNext, onPrev }: contextProps) {
	const [selected, setSelected] = useState("");
	return (
		<div>
			<header>Quiz 4</header>
			<div>다음 중 구너가 아니었던 선수는?</div>
			<RadioGroup
				label="힌트: 맨체스터 클럽 두곳에서 뛰었어요"
				value={selected}
				onValueChange={setSelected}
			>
				<Radio value="가레스 베일">가레스 베일</Radio>
				<Radio value="도미닉 솔랑케">도미닉 솔랑케</Radio>
				<Radio value="카를로스 테베스">카를로스 테베스</Radio>
				<Radio value="맷 도허티">맷 도허티</Radio>
				<Radio value="세르주 오리에">세르주 오리에</Radio>
			</RadioGroup>
			<Button className="mt-5 mr-3" onClick={() => onPrev()}>
				Prev
			</Button>{" "}
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

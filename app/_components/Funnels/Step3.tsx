"use client";
import { contextProps } from "@/app/_types";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export function Step3({ onNext, onPrev }: contextProps) {
	const [selected, setSelected] = useState("");
	return (
		<div>
			<header>Quiz3</header>
			<div>다음 중 아스날 팬이 아닌 유명인은?</div>
			<RadioGroup
				label="힌트: 스파이더 맨으로 유명해요"
				value={selected}
				onValueChange={setSelected}
			>
				<Radio value="앤 해서웨이 ">앤 해서웨이 </Radio>
				<Radio value="엘리자베스 2세">엘리자베스 2세</Radio>
				<Radio value="톰 홀랜드">톰 홀랜드</Radio>
				<Radio value="카야 스코델라리오">카야 스코델라리오</Radio>
				<Radio value="키아누 리브스 ">키아누 리브스 </Radio>
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

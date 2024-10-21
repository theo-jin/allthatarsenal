"use client";
import { contextProps } from "@/app/_types";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export function Step2({ onNext, onPrev }: contextProps) {
	const [selected, setSelected] = useState("");
	return (
		<div>
			<header>Quiz 2</header>
			<div>현재 아스날의 감독과 주장은 누구인가요?</div>
			<RadioGroup
				label="힌트: 감독은 스페인 사람이고 선수는 노르웨이 사람이에요"
				value={selected}
				onValueChange={setSelected}
			>
				<Radio value="아르센 벵거 & 아론램지">아르센 벵거 & 아론 램지</Radio>
				<Radio value="미켈 아르테타 & 마르틴 외데고르">
					미켈 아르테타 & 마르틴 외데고르
				</Radio>
				<Radio value="미켈 아르테타 & 데클란 라이스">
					미켈 아르테타 & 데클란 라이스
				</Radio>
				<Radio value="아르센 벵거 & 티에리 앙리">
					아르센 벵거 & 티에리 앙리
				</Radio>
				<Radio value="미켈아르테타 & 부카요 사카">
					미켈아르테타 & 부카요 사카
				</Radio>
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

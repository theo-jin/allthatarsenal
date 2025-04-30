import { RadioGroupProps } from "@nextui-org/react";

export type StepType =
	| "step1"
	| "step2"
	| "step3"
	| "step4"
	| "step5"
	| "result";

export interface QuizStep {
	question: string;
	hint: string;
	options: string[];
	correctAnswer: string;
}

export interface QuizContext {
	step1: string;
	step2: string;
	step3: string;
	step4: string;
	step5: string;
}

export interface QuizResult {
	success: boolean;
	correctCount: number;
	results: {
		step1: boolean;
		step2: boolean;
		step3: boolean;
		step4: boolean;
		step5: boolean;
	};
	totalQuestions: number;
}

export interface StepProps {
	onNext: (answer: string) => void;
	onPrev?: () => void;
}

export interface QuizStepProps extends StepProps {
	step: QuizStep;
}

export const QUIZ_STEPS: Record<Exclude<StepType, "result">, QuizStep> = {
	step1: {
		question: "아스날의 연고지는 어디인가요?",
		hint: "아스날은 프리미어리그 소속이에요",
		options: ["Buenos Aires", "Sydney", "San Francisco", "London", "Tokyo"],
		correctAnswer: "london",
	},
	step2: {
		question: "현재 아스날의 감독과 주장은 누구인가요?",
		hint: "감독은 스페인 사람이고 선수는 노르웨이 사람이에요",
		options: [
			"아르센 벵거 & 아론 램지",
			"미켈 아르테타 & 마르틴 외데고르",
			"미켈 아르테타 & 데클란 라이스",
			"아르센 벵거 & 티에리 앙리",
			"미켈아르테타 & 부카요 사카",
		],
		correctAnswer: "미켈 아르테타 & 마르틴 외데고르",
	},
	step3: {
		question: "다음 중 아스날 팬이 아닌 유명인은?",
		hint: "스파이더 맨으로 유명해요",
		options: [
			"앤 해서웨이",
			"엘리자베스 2세",
			"톰 홀랜드",
			"카야 스코델라리오",
			"키아누 리브스",
		],
		correctAnswer: "톰 홀랜드",
	},
	step4: {
		question: "다음 중 구너가 아니었던 선수는?",
		hint: "맨체스터 클럽 두곳에서 뛰었어요",
		options: [
			"가레스 베일",
			"도미닉 솔랑케",
			"카를로스 테베스",
			"맷 도허티",
			"세르주 오리에",
		],
		correctAnswer: "카를로스 테베스",
	},
	step5: {
		question: "정확한 아스날의 철자를 영어 소문자로 써주세요",
		hint: "",
		options: [],
		correctAnswer: "arsenal",
	},
};

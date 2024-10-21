import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export interface Player {
	_id: string;
	name: string;
	number: number;
	pace: number;
	dribble: number;
	shot: number;
	pass: number;
	physical: number;
	defence: number;
	role: string;
	pic: string;
	pic2: string;
	nation: string;
	describe: string;
	birth: Date;
	height: number;
}

export interface step1 {
	step1?: string;
	step2?: string;
	step3?: string;
	step4?: string;
	step5?: string;
}
export interface step2 {
	step1: string;
	step2?: string;
	step3?: string;
	step4?: string;
	step5?: string;
}
export interface step3 {
	step1: string;
	step2: string;
	step3?: string;
	step4?: string;
	step5?: string;
}
export interface step4 {
	step1: string;
	step2: string;
	step3: string;
	step4?: string;
	step5?: string;
}
export interface step5 {
	step1: string;
	step2: string;
	step3: string;
	step4: string;
	step5?: string;
}
export interface result {
	step1: string;
	step2: string;
	step3: string;
	step4: string;
	step5: string;
}
export interface contextProps {
	onNext: (step: string) => void;
	onPrev: () => void;
}

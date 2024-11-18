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

export interface Match {
	utcDate: string;
	status: string;
	homeTeam: { shortName: string; crest: string };
	awayTeam: { shortName: string; crest: string };
	score: { fullTime: { home: number | null; away: number | null } };
	referees: { name: string }[];
}

export interface CalendarEvent {
	title: string;
	start: string;
	color: string;
	detail: string | { homeScore: number | string; awayScore: number | string };
	referees: string;
	homeTeamPic: string;
	awayTeamPic: string;
}

export interface MatchData {
	matchResult: string;
	result: string | { homeScore: number | string; awayScore: number | string };
	date: Date;
	referees: string;
	homeTeamPic: string;
	awayTeamPic: string;
}

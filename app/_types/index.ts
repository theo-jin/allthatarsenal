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

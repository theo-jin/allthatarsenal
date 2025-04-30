// components/Pitch.tsx
import Image from "next/image";
import PlayerCard from "./PPcard";
import image from "@/public/soccer-green-field_225004-1137.avif";
import { motion } from "framer-motion";
const FORMATIONS = {
	"4-3-3": [
		{ x: 50, y: 90 }, // GK
		{ x: 20, y: 75 },
		{ x: 40, y: 75 },
		{ x: 60, y: 75 },
		{ x: 80, y: 75 }, // DEF
		{ x: 35, y: 45 },
		{ x: 50, y: 60 },
		{ x: 65, y: 45 }, // MID
		{ x: 20, y: 30 },
		{ x: 50, y: 20 },
		{ x: 80, y: 30 }, // FWD
	],
	"4-4-2": [
		{ x: 50, y: 90 },
		{ x: 20, y: 75 },
		{ x: 40, y: 75 },
		{ x: 60, y: 75 },
		{ x: 80, y: 75 },
		{ x: 20, y: 50 },
		{ x: 40, y: 50 },
		{ x: 60, y: 50 },
		{ x: 80, y: 50 },
		{ x: 40, y: 20 },
		{ x: 60, y: 20 },
	],
	"4-2-3-1": [
		{ x: 50, y: 90 },
		{ x: 20, y: 75 },
		{ x: 40, y: 75 },
		{ x: 60, y: 75 },
		{ x: 80, y: 75 },
		{ x: 40, y: 60 },
		{ x: 60, y: 60 },
		{ x: 20, y: 35 },
		{ x: 50, y: 35 },
		{ x: 80, y: 35 },
		{ x: 50, y: 15 },
	],
};
export default function Pitch({ formation }: { formation: "4-3-3" | "4-4-2" | "4-2-3-1" }) {
	const positions = FORMATIONS[formation];

	return (
		<div className="relative w-full max-w-[400px] aspect-[2/3] mx-auto">
			<Image src={image} alt="축구장" layout="fill" objectFit="contain" />
			{positions.map((pos, index) => (
				<motion.div
					key={index}
					layout
					layoutId={`player-${index}`} // layoutId를 주면 부드럽게 위치 전환
					className="absolute"
					style={{
						left: `${pos.x}%`,
						top: `${pos.y}%`,
						transform: "translate(-50%, -50%)",
					}}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				>
					<PlayerCard number={index + 1} />
				</motion.div>
			))}
		</div>
	);
}

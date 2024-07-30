import { Button, Card, CardFooter, CardHeader, Link } from "@nextui-org/react";
import Image from "next/image";

export const PlayerCard = ({ player }: any) => {
	return (
		<Card isFooterBlurred className="w-full h-full relative">
			<CardHeader className="absolute z-10 top-1 flex-col items-start">
				<h4 className="text-neutral-600 font-bold text-2xl">
					#{player.number} {player.name}
				</h4>
			</CardHeader>
			<Image
				alt="Player Pic"
				fill
				className="object-cover"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				src={player.pic}
			/>
			<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
				<div>
					<div className="w-8 h-8 relative">
						<Image
							src={`https://flagsapi.com/${player.nation}/flat/32.png`}
							fill
							alt="flag"
						/>
					</div>

					<p className="text-black text-base font-normal">
						{player.role.toUpperCase()}
					</p>
				</div>

				<Button
					color="danger"
					href={`/detail/${player._id}`}
					as={Link}
					size="md"
				>
					See more
				</Button>
			</CardFooter>
		</Card>
	);
};

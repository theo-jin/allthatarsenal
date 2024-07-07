import { Button, Card, CardFooter, CardHeader, Link } from "@nextui-org/react";

export const PlayerCard = ({ player }: any) => {
	return (
		<Card isFooterBlurred className="w-full h-[340px] ">
			<CardHeader className="absolute z-10 top-1 flex-col items-start">
				<h4 className="text-white font-bold text-2xl">
					#{player.number} {player.name}
				</h4>
			</CardHeader>
			<img
				loading="lazy"
				alt="Player Pic"
				className="z-0 w-full h-full  object-cover"
				src={player.pic}
			/>
			<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
				<div>
					<img
						src={`https://flagsapi.com/${player.nation}/flat/32.png`}
						alt="flag"
					/>
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

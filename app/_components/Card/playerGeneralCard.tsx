import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag } from "@/components/ui/flag";

export function PlayerCard({ player }: { player: any }) {
	console.log(player);
	return (
		<Link href={`/players/${player._id}`}>
			<Card className="hover:shadow-lg rounded-t-lg">
				<div className="flex justify-center items-center bg-gray-100 rounded-t-lg w-[400px] h-[225px] overflow-hidden">
					<Image
						src={player.pic}
						alt={player.name}
						width={400}
						height={225}
						className="object-cover rounded-t-lg w-full h-full"
					/>
				</div>

				<CardContent>
					<CardTitle className="text-xl">
						#{player.number} {player.name}
					</CardTitle>
					<div className="flex">
						<span className="text-l mr-1"> {player.role}</span>
						<span>
							<Flag size={25} nation={player.nation} />
						</span>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}

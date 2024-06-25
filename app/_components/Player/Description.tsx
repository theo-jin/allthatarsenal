import React from "react";

export default function Description({ player }: any) {
	return (
		<div className="flex justify-center mb-3">
			<div className="w-[400px] rounded-xl border-1 border-zinc-300">
				<div className="grid grid-cols-2 gap-3 px-3 py-0 text-small text-default-400">
					<h3 className="font-semibold text-center text-foreground/90 p-1">
						PACE :{player.pace}
					</h3>
					<h3 className="font-semibold text-center text-foreground/90 p-1">
						DRIBBLE: {player.dribble}
					</h3>
					<h3 className="font-semibold text-center text-foreground/90 p-1">
						SHOT: {player.shot}
					</h3>
					<h3 className="font-semibold text-center text-foreground/90 p-1">
						PASS: {player.pass}
					</h3>
					<h3 className="font-semibold text-center text-foreground/90 p-1">
						PHYSICAL: {player.physical}
					</h3>
					<h3 className="font-semibold text-center text-foreground/90 p-1">
						DEFENCE: {player.defence}
					</h3>
				</div>

				<div className="border-t-1  border-zinc-300 p-3">
					<div className="text-foreground/90 text-center">
						{player.describe}
					</div>
				</div>
			</div>
		</div>
	);
}

"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { LikeBtn } from "../Buttons/LikeBtn";

export default function PlayerInfo({ player }: any) {
	return (
		<div className="flex justify-center">
			<Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]">
				<CardBody>
					<div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-12 md:col-span-4">
							<img
								alt="Album cover"
								className="object-cover rounded-lg"
								height={200}
								src={player.pic2}
								width="100%"
							/>
						</div>

						<div className="flex flex-col col-span-12 md:col-span-8">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-0">
									<h3 className="font-semibold text-foreground/90">
										No.{player.number} {player.name}
									</h3>
									<p className=" text-foreground/80">
										{player.role.toUpperCase()}
									</p>

									<div className="text-foreground/90">
										Birth: {player.birth.toDateString()}
									</div>
									<div className="text-foreground/90">
										Height: {player.height}cm
									</div>
									<h1 className="text-large font-medium mt-2">
										<img
											src={`https://flagsapi.com/${player.nation}/flat/32.png`}
											alt="flag"
										/>
									</h1>
								</div>

								<LikeBtn player={player} />
							</div>

							<div className="flex w-full items-center justify-center"></div>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}

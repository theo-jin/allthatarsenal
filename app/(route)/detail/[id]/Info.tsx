"use client";

import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "@/app/_components/icons";

export default function Info({ player }: any) {
	//  즐겨찾기 추후 개발 const [liked, setLiked] = React.useState(false);
	const [liked, setLiked] = React.useState(false);
	return (
		<div className="flex justify-center">
			<Card
				isBlurred
				className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
			>
				<CardBody>
					<div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-12 md:col-span-4">
							<Image
								alt="Album cover"
								className="object-cover"
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
										<Image
											src={`https://flagsapi.com/${player.nation}/flat/32.png`}
											alt="flag"
										/>
									</h1>
								</div>

								<Button
									isIconOnly
									className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
									radius="full"
									variant="light"
									onPress={() => setLiked((v) => !v)}
								>
									<HeartIcon
										className={liked ? "[&>path]:stroke-transparent" : ""}
										fill={liked ? "currentColor" : "none"}
									/>
								</Button>
							</div>

							<div className="flex w-full items-center justify-center"></div>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}

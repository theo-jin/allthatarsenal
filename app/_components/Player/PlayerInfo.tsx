"use client";
import React, { useEffect, useState } from "react";
import { Card, CardBody, Skeleton } from "@nextui-org/react";
import { LikeBtn } from "../Buttons/LikeBtn";
import Image from "next/image";

export default function PlayerInfo({ data }: any) {
	const [isLoaded, setIsLoaded] =useState(false);
	useEffect(() => {
		setIsLoaded(true);
	}, [data.player.pic2]);
	return (
		<div className="flex justify-center">
			<Card className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]">
				<CardBody>
					<div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
						<div className="relative col-span-12 md:col-span-4">
							<Skeleton className="rounded-lg" isLoaded={isLoaded}>
								<Image
									alt="Album cover"
									className="object-cover rounded-lg"
									src={data.player.pic2}
									layout="responsive"
									width={100}
									height={200}
								/>
							</Skeleton>
						</div>

						<div className="flex flex-col col-span-12 md:col-span-8">
							<div className="flex justify-between items-start">
								<div className="flex flex-col gap-0">
									<h3 className="font-semibold text-foreground/90">
										No.{data.player.number} {data.player.name}
									</h3>
									<p className=" text-foreground/80">
										{data.player.role.toUpperCase()}
									</p>

									<div className="text-foreground/90">
										Birth: {data.player.birth.toDateString()}
									</div>
									<div className="text-foreground/90">
										Height: {data.player.height}cm
									</div>
									<h1 className="text-large font-medium mt-2">
										<div className="w-8 h-8 relative">
											<Image
												src={`https://flagsapi.com/${data.player.nation}/flat/32.png`}
												fill={true}
												alt="flag"
											/>
										</div>
									</h1>
								</div>

								{data.SessionValue ?
									<LikeBtn player={data.player} />
								:	null}
							</div>

							<div className="flex w-full items-center justify-center"></div>
						</div>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}

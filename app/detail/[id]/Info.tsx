'use client'

import React from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "@/components/icons";
import { Chart } from "@/components/Chart";

export default function Info({ player }: any) {
    const [liked, setLiked] = React.useState(false);

    return (
        <>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                src={player.pic2}
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">#{player.num} {player.name}</h3>
                                    <p className="text-small text-foreground/80">{player.role.toUpperCase()}</p>
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



                            <div className="flex w-full items-center justify-center">

                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>

        </>
    );
}

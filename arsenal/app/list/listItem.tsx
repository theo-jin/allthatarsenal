'use client'

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { title } from "@/components/primitives";

export default function App({ result }: any) {


    return (
        <div>
            <section className="flex flex-col items-left justify-start gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-left justify-start">
                    <h1 className={title()}>Player List</h1>
                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center">
                {result.map(function (a: any, i: string | number) {
                    return (
                        <div className="col-auto gap-4 justify-center">
                            <Card isFooterBlurred className="w-full h-[340px] ">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                    <h4 className="text-white font-bold text-2xl">{result[i].name}</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Player Pic"
                                    className="z-0 w-full h-full  object-cover"
                                    src={result[i].pic}
                                />
                                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                    <div>
                                        <Image
                                            src={`https://flagsapi.com/${result[i].nation}/flat/32.png`}
                                            alt="flag"
                                        />
                                        <p className="text-black text-base font-normal">{result[i].role}</p>
                                    </div>
                                    <Button color="danger" size="md">
                                        See more
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })}</div>
        </div>
    )
}
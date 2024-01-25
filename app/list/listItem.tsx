'use client'

import { Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";

import { Image } from "@nextui-org/image";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { title } from "@/components/primitives";
import Link from "next/link";
import { SearchIcon } from "@/components/icons";
const playersPerPage = 9;

export default function App({ playerList }: any) {
    const [sortedPlayerList, setSortedPlayerList] = useState([...playerList]);
    const [isAscending, setIsAscending] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    //선수 이름순 정렬
    const sortPlayerList = () => {
        const sortedList = [...sortedPlayerList].sort((a, b) => {
            if (isAscending) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        setSortedPlayerList(sortedList);
        setIsAscending(!isAscending);
    };


    //선수검색
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filteredList = playerList.filter(
            (player: { name: string }) => player.name.toLowerCase().includes(term)
        );
        setSortedPlayerList(filteredList);
        setCurrentPage(1);
    };

    const indexOfLastPlayer = currentPage * playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
    const currentPlayers = sortedPlayerList.slice(indexOfFirstPlayer, indexOfLastPlayer);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <section className="flex flex-col items-left justify-start gap-4 py-8 md:py-10">
                <header className="inline-block max-w-lg text-left justify-start">
                    <h1 className={title()}>Player List</h1>
                </header>
                <div className="flex items-center gap-4">
                    <Input
                        placeholder="Search by name"
                        classNames={{
                            inputWrapper: "bg-default-100",
                            input: "text-sm",
                        }}
                        value={searchTerm}
                        onChange={handleSearch}
                        startContent={
                            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Button onClick={sortPlayerList} size="md">
                        {isAscending ? "Name↑ " : "Name↓"}
                    </Button>
                </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center">
                {currentPlayers.map(function (a: any, i: number) {
                    return (
                        <div className="col-auto gap-4 justify-center" key={i}>
                            <Card isFooterBlurred className="w-full h-[340px] ">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                    <h4 className="text-white font-bold text-2xl">
                                        {currentPlayers[i].name}
                                    </h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Player Pic"
                                    className="z-0 w-full h-full  object-cover"
                                    src={currentPlayers[i].pic}
                                />
                                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                                    <div>
                                        <Image
                                            src={`https://flagsapi.com/${currentPlayers[i].nation}/flat/32.png`}
                                            alt="flag"
                                        />
                                        <p className="text-black text-base font-normal">
                                            {currentPlayers[i].role.toUpperCase()}
                                        </p>
                                    </div>

                                    <Button color="danger" size="md">
                                        <Link href={`/detail/${currentPlayers[i]._id}`}>
                                            See more
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    );
                })}
            </div>
            <Pagination

                onChange={paginate} total={Math.ceil(sortedPlayerList.length / playersPerPage)} initialPage={1} />
        </div>
    );
}

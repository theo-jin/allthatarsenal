"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { title } from "@/app/_components/primitives";
import Link from "next/link";
import { SearchIcon } from "@/app/_components/icons";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function App({ playerList }: any) {
	const [sortedPlayerList, setSortedPlayerList] = useState([...playerList]);
	const [isAscending, setIsAscending] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedRole, setSelectedRole] = useState("");
	const [selectedKeys, setSelectedKeys]: any = useState<Set<string>>(
		new Set(["ROLE"]),
	);

	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const selectedValue = useMemo(
		() => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
		[selectedKeys],
	);

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

		const filteredList = playerList.filter((player: { name: string }) =>
			player.name.toLowerCase().includes(term),
		);
		setSortedPlayerList(filteredList);
		setCurrentPage(1);
	};

	// 역할에 따라 선수 필터링
	const filterByRole = (role: string) => {
		const filteredList = playerList.filter(
			(player: { role: string }) => player.role.toUpperCase() === role,
		);
		setSortedPlayerList(filteredList);
		setSelectedRole(role);
	};

	//  페이지네이션
	const playersPerPage = 9;
	const indexOfLastPlayer = currentPage * playersPerPage;
	const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
	const currentPlayers = sortedPlayerList.slice(
		indexOfFirstPlayer,
		indexOfLastPlayer,
	);

	const paginate = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div>
			<motion.div className="progress-bar" style={{ scaleX }} />
			<section className="flex justify-between gap-3 py-8 md:py-10">
				<div className=" max-w-lg text-left gap-10 ">
					<h1 className={title()}>Player List</h1>
				</div>
				<div className="flex gap-1">
					<Input
						placeholder=""
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
					<Dropdown>
						<DropdownTrigger>
							<Button variant="bordered" className="capitalize">
								{selectedValue}
							</Button>
						</DropdownTrigger>
						<DropdownMenu
							aria-label="Single selection example"
							variant="flat"
							disallowEmptySelection
							selectionMode="single"
							selectedKeys={selectedKeys}
							onSelectionChange={setSelectedKeys}
						>
							<DropdownItem
								key="Role"
								onPress={() => setSortedPlayerList([...playerList])}
							>
								{" "}
								ROLE
							</DropdownItem>
							<DropdownItem
								key="FORWARD"
								onPress={() => filterByRole("FORWARD")}
							>
								{" "}
								FORWARD
							</DropdownItem>
							<DropdownItem
								key="MIDFIELDER"
								onPress={() => filterByRole("MIDFIELDER")}
							>
								MIDFIELDER
							</DropdownItem>
							<DropdownItem
								key="DEFENDER"
								onPress={() => filterByRole("DEFENDER")}
							>
								DEFENDER
							</DropdownItem>
							<DropdownItem
								key="GOALKEEPER"
								onPress={() => filterByRole("GOALKEEPER")}
							>
								GOALKEEPER
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<Button onClick={sortPlayerList} size="md">
						{isAscending ? "Name↑ " : "Name↓"}
					</Button>
				</div>
			</section>

			<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center">
				{currentPlayers.map((player) => {
					return (
						<div className="col-auto gap-4 justify-center" key={player._id}>
							<Card isFooterBlurred className="w-full h-[340px] ">
								<CardHeader className="absolute z-10 top-1 flex-col items-start">
									<h4 className="text-white font-bold text-2xl">
										{player.name}
									</h4>
								</CardHeader>
								<Image
									loading="lazy"
									removeWrapper
									alt="Player Pic"
									className="z-0 w-full h-full  object-cover"
									src={player.pic}
								/>
								<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
									<div>
										<Image
											src={`https://flagsapi.com/${player.nation}/flat/32.png`}
											alt="flag"
										/>
										<p className="text-black text-base font-normal">
											{player.role.toUpperCase()}
										</p>
									</div>

									<Button color="danger" size="md">
										<Link href={`/detail/${player._id}`}>See more</Link>
									</Button>
								</CardFooter>
							</Card>
						</div>
					);
				})}
			</div>

			<Pagination
				className="justify-center"
				color="danger"
				onChange={paginate}
				total={Math.ceil(sortedPlayerList.length / playersPerPage)}
				initialPage={1}
			/>
		</div>
	);
}

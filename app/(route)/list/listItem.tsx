"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { title } from "@/app/_components/primitives";
import { SearchIcon } from "@/app/_components/icons";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { PlayerCard } from "@/app/_components/Player/PlayerCard";

export default function App({ playerList }: any) {
	const [sortedPlayerList, setSortedPlayerList] = useState([...playerList]);
	const [isAscending, setIsAscending] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedRole, setSelectedRole] = useState("");
	const [selectedKeys, setSelectedKeys]: any = useState<Set<string>>(
		new Set(["ROLE"]),
	);

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
							<PlayerCard player={player} />
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

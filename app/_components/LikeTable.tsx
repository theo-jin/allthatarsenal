"use client";

import {
	Button,
	Link,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";

export const LikeTable = () => {
	const { data } = useQuery({
		queryKey: ["likeList"],
		queryFn: async () => {
			const res = await fetch(`/api/like/likeLists`);
			if (!res.ok) throw new Error("Network response was not ok");
			return res.json();
		},
	});
	const favorites = data || {};
	const favoritesKey: string[] = Object.keys(favorites);
	const favoritesName: string[] = Object.values(favorites);

	return (
		<Table aria-label=" Example static collection table" className=" w-full ">
			<TableHeader>
				<TableColumn style={{ width: "80%" }}>Name</TableColumn>
				<TableColumn style={{ width: "20%" }}>Link</TableColumn>
			</TableHeader>
			{favoritesKey.length > 0 ?
				<TableBody>
					{favoritesKey.map(function (a: any, i: number) {
						return (
							<TableRow key={favoritesKey[i].toString()}>
								<TableCell key="Name" style={{ width: "80%" }}>
									{favoritesName[i]}
								</TableCell>
								<TableCell key="Link" style={{ width: "10%" }}>
									<Button
										color="danger"
										href={`/detail/${favoritesKey[i]}`}
										as={Link}
										size="md"
									>
										Link
									</Button>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			:	<TableBody emptyContent={"즐겨찾기된 선수가 없습니다."}>{[]}</TableBody>}
		</Table>
	);
};

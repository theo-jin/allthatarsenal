"use client";
import React, { useState, useRef } from "react";
import {
	Input,
	Button,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	useDisclosure,
} from "@nextui-org/react";

import EditCommentModal from "./EditCommentModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ErrorModal from "../ErrorModal";

import { useMutation, useQuery } from "@tanstack/react-query";

import { queryClient } from "@/app/providers";

export default function Comment({ player }: any) {
	const [comment, setComment] = useState("");
	const {
		isOpen: isErrorOpen,
		onOpen: onErrorOpen,
		onOpenChange: onErrorOpenChange,
	} = useDisclosure();
	const inputRef: any = useRef(null);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["comments", player._id],
		queryFn: async () => {
			const res = await fetch(`/api/comment/list?id=${player._id}`);
			if (!res.ok) throw new Error("Network response was not ok");
			return res.json();
		},
	});

	const { mutate } = useMutation({
		mutationFn: async () => {
			const res = await fetch("/api/comment/new", {
				method: "POST",
				body: JSON.stringify({
					comment: comment,
					_id: player._id,
				}),
			});
			if (!res.ok) throw new Error("Network response was not ok");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", player._id] });
			setComment("");
		},
		onError: () => {
			setComment("");
			onErrorOpen();
		},
	});

	const submitHandler = () => {
		//comment에 아무것도 없을시 인풋창 포커스
		if (comment === "") {
			inputRef.current?.focus();
			return;
		}
		mutate();
	};

	const onKeyDown = (e: { key: string }) => {
		if (e.key === "Enter") {
			submitHandler();
		}
	};

	let content;
	if (isLoading) {
		content = (
			<Table aria-label="Loading comments" className="w-full">
				<TableHeader>
					<TableColumn style={{ width: "80%" }}>Comments</TableColumn>
					<TableColumn style={{ width: "10%" }}>AUTHOR</TableColumn>
					<TableColumn style={{ width: "10%" }}>EDIT & DELETE</TableColumn>
				</TableHeader>
				<TableBody emptyContent={"Loading Comments..."}>{[]}</TableBody>
			</Table>
		);
	} else if (data) {
		content = (
			<Table aria-label="Example static collection table" className="w-full">
				<TableHeader>
					<TableColumn style={{ width: "80%" }}>Comments</TableColumn>
					<TableColumn style={{ width: "10%" }}>AUTHOR</TableColumn>
					<TableColumn style={{ width: "10%" }}>EDIT & DELETE</TableColumn>
				</TableHeader>

				{data.length > 0 ?
					<TableBody>
						{data.map(function (a: any, i: number) {
							return (
								<TableRow key={data[i]._id.toString()}>
									<TableCell key="comment" style={{ width: "80%" }}>
										{data[i].comment}
									</TableCell>
									<TableCell key="author" style={{ width: "10%" }}>
										{data[i].author}
									</TableCell>
									<TableCell
										className="relative flex items-center gap-3"
										style={{ width: "10%" }}
									>
										<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
											<EditCommentModal comment={data[i]} />
										</span>
										<span className="text-lg text-danger cursor-pointer active:opacity-50">
											<DeleteConfirmModal comment={data[i]} />
										</span>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				:	<TableBody emptyContent={"댓글이 없습니다."}>{[]}</TableBody>}
			</Table>
		);
	} else if (isError) {
		content = <p>Error loading comments</p>;
	}

	return (
		<div className="'flex flex-col items-center space-y-10 p-24'">
			{content}
			<div className="grid w-full justify-center">
				<Input
					ref={inputRef}
					size="lg"
					value={comment}
					onKeyDown={onKeyDown}
					placeholder="Write Comment"
					onChange={(e) => setComment(e.target.value)}
					endContent={<Button onPress={submitHandler}>submit</Button>}
				/>
			</div>

			<ErrorModal
				isErrorOpen={isErrorOpen}
				onErrorOpenChange={onErrorOpenChange}
				errorMessage={"로그인 해주세요"}
			/>
		</div>
	);
}

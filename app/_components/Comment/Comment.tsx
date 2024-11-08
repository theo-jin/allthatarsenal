"use client";
import React, { useState, useRef } from "react";
import {
	Button,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	useDisclosure,
	Input,
} from "@nextui-org/react";

import EditCommentModal from "./EditCommentModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ErrorModal from "../ErrorModal";

import { useMutation, useQuery } from "@tanstack/react-query";

import { queryClient } from "@/app/providers";
import { addNewComment, fetchComments } from "@/app/utils/commentUtils";
import { Player } from "@/app/_types";

export default function Comment({ player }: { player: Player }) {
	const [comment, setComment] = useState("");
	const {
		isOpen: isErrorOpen,
		onOpen: onErrorOpen,
		onOpenChange: onErrorOpenChange,
	} = useDisclosure();
	
	const inputRef: any = useRef(null);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["comments", player._id],
		queryFn: () => fetchComments(player._id),
		staleTime: 5000,
		gcTime: 40000,
	});

	const { mutate } = useMutation({
		mutationFn: () => addNewComment(comment, player._id),
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
		<div className="'flex flex-col items-center space-y-5 p-24'">
			{content}
			<div className="w-full">
				<Input
					ref={inputRef}
					size="lg"
					value={comment}
					onKeyDown={onKeyDown}
					placeholder="Write Comment"
					onChange={(e) => setComment(e.target.value)}
					fullWidth
					endContent={
						<Button
							className="font-semibold text-gray-500"
							onPress={submitHandler}
						>
							Submit
						</Button>
					}
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

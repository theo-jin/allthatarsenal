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
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Modal,
} from "@nextui-org/react";

import EditCommentModal from "./EditCommentModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

import { KeyboardEvent } from "@react-types/shared";
import { useMutation, useQuery } from "@tanstack/react-query";

import { queryClient } from "@/app/providers";

export default function Comment({ player }: any) {
	let [comment, setComment] = useState("");
	const {
		isOpen: isErrorOpen,
		onOpen: onErrorOpen,
		onOpenChange: onErrorOpenChange,
	} = useDisclosure();
	const inputRef: any = useRef(null);
	const { data, isLoading, isError } = useQuery({
		queryKey: ["comments", player._id],
		queryFn: async () => {
			const res = await (
				await fetch(`/api/comment/list?id=${player._id}`)
			).json();
			return res;
		},
	});

	const { mutate } = useMutation({
		mutationFn: async () => {
			const res = await (
				await fetch("/api/comment/new", {
					method: "POST",
					body: JSON.stringify({
						comment: comment,
						_id: player._id,
					}),
				})
			).json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments", player._id] });
		},
		onError: () => {
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

	//Enter입력시 submitHandler실행
	const onKeyDown:
		| (React.KeyboardEventHandler<HTMLInputElement> &
				((e: KeyboardEvent) => void))
		| undefined = (e: { keyCode: number }) => {
		if (e.keyCode === 13) {
			submitHandler();
		}
	};
	let content;
	if (data) {
		content = (
			<Table aria-label=" Example static collection table" className=" w-full ">
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
	}
	if (isLoading) {
		content = (
			<Table aria-label=" Example static collection table" className=" w-full ">
				<TableHeader>
					<TableColumn style={{ width: "80%" }}>Comments</TableColumn>
					<TableColumn style={{ width: "10%" }}>AUTHOR</TableColumn>
					<TableColumn style={{ width: "10%" }}>EDIT & DELETE</TableColumn>
				</TableHeader>
				<TableBody emptyContent={"Loading Comments..."}>{[]}</TableBody>
			</Table>
		);
	}
	return (
		<div className="'flex flex-col items-center space-y-10 p-24'">
			{content}
			<div className="grid w-full justify-center">
				<Input
					ref={inputRef}
					size="lg"
					onKeyDown={onKeyDown}
					placeholder="Write Comment"
					onChange={(e) => {
						setComment(e.target.value);
					}}
					endContent={<Button onPress={submitHandler}>submit</Button>}
				/>
			</div>

			{/* ErrorModal */}
			<Modal
				backdrop="opaque"
				isOpen={isErrorOpen}
				onOpenChange={onErrorOpenChange}
				classNames={{
					backdrop:
						"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								에러 발생
							</ModalHeader>
							<ModalBody>
								<p>로그인 해주세요.</p>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onPress={onClose}>
									닫기
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	);
}

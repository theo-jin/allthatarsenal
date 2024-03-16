"use client";
import React, { useState, useEffect, useRef } from "react";
import {
	Input,
	Button,
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";
import { DeleteIcon } from "@/app/_components/icons";
import CommentModal from "./CommentModal";
import { ObjectId } from "mongodb";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { comment } from "@/redux/slices/commentSlice";
import { KeyboardEvent } from "@react-types/shared";

interface CommentItem {
	comment: string;
	_id: ObjectId;
	author: string;
	parent: ObjectId;
}

export default function Comment({ player }: any) {
	let [comment, setComment] = useState("");
	let [data, setData] = useState<CommentItem[]>([]);
	// let commentData = useAppSelector((state) => state.comment)
	// let dispatch = useAppDispatch()

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		fetch("/api/comment/list?id=" + player._id)
			.then((r) => r.json())
			.then((result) => {
				setData(result);
			});
	}, [player._id]);

	const submitHandler = () => {
		//comment에 아무것도 없을시 인풋창 포커스
		if (comment === "") {
			inputRef.current?.focus();
			return;
		}

		fetch("/api/comment/new", {
			method: "POST",
			body: JSON.stringify({
				comment: comment,
				_id: player._id,
			}),
		}).then(() =>
			fetch("/api/comment/list?id=" + player._id)
				.then((r) => r.json())
				.then((result) => {
					setData(result);
				}),
		);
	};

	const handleDelete = (i: number) => {
		fetch("/api/comment/delete", {
			method: "DELETE",
			body: JSON.stringify(data[i]._id),
		}).then(() =>
			fetch("/api/comment/list?id=" + player._id)
				.then((r) => r.json())
				.then((result) => {
					setData(result);
				}),
		);
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

	return (
		<div className="'flex flex-col items-center space-y-10 p-24'">
			<Table aria-label=" Example static collection table" className=" w-full ">
				<TableHeader>
					<TableColumn style={{ width: "80%" }}>Comments</TableColumn>
					<TableColumn style={{ width: "10%" }}>AUTHOR</TableColumn>
					<TableColumn style={{ width: "10%" }}>EDIT & DELETE</TableColumn>
				</TableHeader>

				{data.length > 0 ?
					<TableBody>
						{data.map(function (a, i) {
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
											<CommentModal comment={data[i]} />
										</span>
										<span
											className="text-lg text-danger cursor-pointer active:opacity-50"
											onClick={() => handleDelete(i)}
										>
											<DeleteIcon />
										</span>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				:	<TableBody emptyContent={"No rows to display."}>{[]}</TableBody>}
			</Table>
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
		</div>
	);
}

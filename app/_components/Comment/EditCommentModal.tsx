"use client";
import React, { useState } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
} from "@nextui-org/react";
import { EditIcon } from "@/app/_components/icons";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";

export default function CommentModal({ comment }: any) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	let [com, setCom] = useState(`${comment.comment}`);

	const { mutate } = useMutation({
		mutationFn: async () => {
			const res = await (
				await fetch("/api/comment/edit", {
					method: "POST",
					body: JSON.stringify({
						comment: com,
						_id: comment._id,
					}),
				})
			).json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments"] });
		},
	});
	function handleEdit() {
		mutate();
	}

	return (
		<>
			<span onClick={onOpen}>
				<EditIcon />
			</span>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								EDIT COMMENT
							</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									onChange={(e) => {
										setCom(e.target.value);
									}}
									defaultValue={com}
									label="Comment"
									placeholder="Enter your email"
									variant="bordered"
								/>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onPress={handleEdit} onClick={onClose}>
									수정
								</Button>
								<Button color="danger" variant="flat" onPress={onClose}>
									취소
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

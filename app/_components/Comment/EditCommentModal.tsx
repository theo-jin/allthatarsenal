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
import ErrorModal from "../ErrorModal";
import { editComment } from "@/app/utils/commentUtils";

export default function CommentModal({ comment }: any) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const {
		isOpen: isErrorOpen,
		onOpen: onErrorOpen,
		onOpenChange: onErrorOpenChange,
	} = useDisclosure();
	const [com, setCom] = useState(comment.comment);

	const { mutate } = useMutation({
		mutationFn: () => editComment(comment.id, comment),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments"] });
		},
		onError: () => {
			onErrorOpen();
		},
	});

	const handleEdit = () => {
		mutate();
	};

	const closeBtn = () => {
		setCom(comment.comment);
	};
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
									onChange={(e) => setCom(e.target.value)}
									value={com}
									label="Comment"
									placeholder="Enter your comment"
									variant="bordered"
								/>
							</ModalBody>
							<ModalFooter>
								<Button
									color="primary"
									onPress={() => {
										handleEdit();
										onClose();
									}}
								>
									수정
								</Button>
								<Button
									color="danger"
									variant="flat"
									onPress={() => {
										closeBtn();
										onClose();
									}}
								>
									취소
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
			<ErrorModal
				isErrorOpen={isErrorOpen}
				onErrorOpenChange={onErrorOpenChange}
				errorMessage={"로그인 상태가 아니거나, 글의 작성자가 아닙니다."}
			/>
		</>
	);
}

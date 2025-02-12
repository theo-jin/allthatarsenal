"use client	";
import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
import { DeleteIcon } from "@/app/_components/Icons";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";
import ErrorModal from "../ErrorModal";
import { deleteComment } from "@/app/_actions/fetchComment";

export default function DeleteConfirmModal({ comment }: any) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const {
		isOpen: isErrorOpen,
		onOpen: onErrorOpen,
		onOpenChange: onErrorOpenChange,
	} = useDisclosure();

	const { mutate } = useMutation({
		mutationFn: () => deleteComment(comment._id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments"] });
		},
		onError: () => {
			onErrorOpen();
		},
	});

	function handleDelete() {
		mutate();
	}

	return (
		<>
			<span onClick={onOpen}>
				<DeleteIcon />
			</span>
			<Modal
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				classNames={{
					backdrop:
						"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								댓글 삭제
							</ModalHeader>
							<ModalBody>
								<p>{comment.comment}</p>
								<p>해당 댓글을 삭제 하시겠습니까?</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="primary"
									onPress={() => {
										handleDelete();
										onClose();
									}}
								>
									삭제
								</Button>
								<Button color="danger" variant="light" onPress={onClose}>
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

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
import { DeleteIcon } from "@/app/_components/icons";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/app/providers";

export default function DeleteConfirmModal({ comment }: any) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	const { mutate } = useMutation({
		mutationFn: async () => {
			const res = await (
				await fetch("/api/comment/delete", {
					method: "DELETE",
					body: comment._id,
				})
			).json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["comments"] });
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
								<p>"{comment.comment}"</p>
								<p>해당 댓글을 삭제 하시겠습니까?</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="primary"
									onPress={handleDelete}
									onClick={onClose}
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
		</>
	);
}

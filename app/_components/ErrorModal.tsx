import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";
export default function ErrorModal() {
	const {
		isOpen: isErrorOpen,
		onOpen: onErrorOpen,
		onOpenChange: onErrorOpenChange,
	} = useDisclosure();
	return (
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
						<ModalHeader className="flex flex-col gap-1">에러 발생</ModalHeader>
						<ModalBody>
							<p>작성자와 맞지 않습니다.</p>
						</ModalBody>
						<ModalFooter>
							<Button color="primary" onPress={onClose}>
								확인
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

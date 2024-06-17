import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from "@nextui-org/react";

export default function ErrorModal({
	isErrorOpen,
	onErrorOpenChange,
	errorMessage,
}: any) {
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
							<p>{errorMessage}</p>
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
	);
}

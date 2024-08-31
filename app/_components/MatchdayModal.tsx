import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "@nextui-org/react";

export default function MatchdayModal({
	isModalOpen,
	onModalOpenChange,
	matchData,
}: any) {
	let match = matchData[2];
	const options = {
		timeZone: "Asia/Seoul",
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
	};
	return (
		<Modal
			backdrop="opaque"
			isOpen={isModalOpen}
			onOpenChange={onModalOpenChange}
			classNames={{
				backdrop:
					"bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1">
							{matchData[0]}
						</ModalHeader>
						<ModalBody>
							<p>결과: {matchData[1]}</p>
							<p>경기 일정: {match.toLocaleString("ko-KR", options)}</p>
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

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "@nextui-org/react";
import Image from "next/image";
import type { MatchData } from "@/app/_types";

interface MatchdayModalProps {
	isModalOpen: boolean;
	onModalOpenChange: () => void;
	matchData: MatchData;
}

export default function MatchdayModal({
	isModalOpen,
	onModalOpenChange,
	matchData,
}: MatchdayModalProps) {
	const options: Intl.DateTimeFormatOptions = {
		timeZone: "Asia/Seoul",
		year: "numeric",
		month: "long",
		day: "numeric",
		weekday: "long",
	};

	const { matchResult, result, date, referees, homeTeamPic, awayTeamPic } =
		matchData;

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
						<ModalHeader className="flex flex-col gap-1 text-center">
							{matchResult}
						</ModalHeader>
						<ModalBody>
							<div className="flex items-center justify-between">
								<div className="flex-shrink-0">
									<Image
										src={homeTeamPic}
										alt="Home Team"
										width={100}
										height={100}
									/>
								</div>
								<div className="flex-grow mx-4">
									<div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
										<p className="text-lg font-semibold mb-2">Score</p>
										<p className="text-lg font-semibold mb-2">
											{typeof result === "string" ?
												result
											:	`${result.homeScore} : ${result.awayScore}`}
										</p>
										<p className="text-sm text-gray-600">경기 일정:</p>
										<p className="text-base font-medium mb-2">
											{date.toLocaleString("ko-KR", options)}
										</p>
										<p className="text-sm text-gray-600">주심:</p>
										<p className="text-base font-medium">{referees}</p>
									</div>
								</div>
								<div className="flex-shrink-0">
									<Image
										src={awayTeamPic}
										alt="Away Team"
										width={100}
										height={100}
									/>
								</div>
							</div>
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

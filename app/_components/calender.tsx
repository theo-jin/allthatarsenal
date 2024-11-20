"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import MatchdayModal from "./Modals/MatchdayModal";
import { useDisclosure } from "@nextui-org/react";
import { useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";
import type { Match, CalendarEvent, MatchData } from "../_types";
import { EventClickArg } from "@fullcalendar/core";

function Calender({ matches }: { matches: Match[] }) {
	const {
		isOpen: isModalOpen,
		onOpen: onModalOpen,
		onOpenChange: onModalOpenChange,
	} = useDisclosure();

	const [matchData, setMatchData] = useState<MatchData | null>(null);
	const data: CalendarEvent[] = matches.map((match) => {
		const formattedDate = new Date(match.utcDate).toISOString().split("T")[0];
		const homeScore = match.score?.fullTime?.home ?? "N/A";
		const awayScore = match.score?.fullTime?.away ?? "N/A";
		const scoredTitle =
			match.status === "FINISHED" ?
				`${match.homeTeam.shortName} ${homeScore} vs ${match.awayTeam.shortName} ${awayScore}`
			:	`${match.homeTeam.shortName} vs ${match.awayTeam.shortName}`;
		const scoreResult =
			homeScore === "N/A" ? "경기전" : { homeScore, awayScore };

		return {
			title: scoredTitle,
			start: formattedDate,
			color: match.homeTeam.shortName === "Arsenal" ? "#ff0000" : "#6E6E6E",
			detail: scoreResult,
			referees: match.referees[0]?.name ?? "",
			homeTeamPic: match.homeTeam.crest,
			awayTeamPic: match.awayTeam.crest,
		};
	});

	function handleEventClick(e: EventClickArg) {
		const { event } = e;
		setMatchData({
			matchResult: event.title,
			result: event.extendedProps.detail,
			date: event.start!,
			referees: event.extendedProps.referees,
			homeTeamPic: event.extendedProps.homeTeamPic,
			awayTeamPic: event.extendedProps.awayTeamPic,
		});
		onModalOpen();
	}

	const isDesktop = useMediaQuery("(min-width: 768px)");
	const calendarRef = useRef<FullCalendar>(null);

	useLayoutEffect(() => {
		const calendarApi = calendarRef!.current!.getApi();
		calendarApi.changeView(isDesktop ? "dayGridMonth" : "listMonth");
	}, [isDesktop]);

	return (
		<div>
			<FullCalendar
				plugins={[listPlugin, dayGridPlugin, interactionPlugin]}
				ref={calendarRef}
				initialView={isDesktop ? "dayGridMonth" : "listMonth"}
				dayMaxEvents={true}
				events={data}
				height={"600px"}
				eventClick={handleEventClick}
				eventDisplay={"auto"}
			/>
			{matchData && (
				<MatchdayModal
					isModalOpen={isModalOpen}
					onModalOpenChange={onModalOpenChange}
					matchData={matchData}
				/>
			)}
		</div>
	);
}

export default Calender;

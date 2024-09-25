"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import MatchdayModal from "./Modals/MatchdayModal";
import { useDisclosure } from "@nextui-org/react";

import { useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

function Calendar({ teamData }: any) {
	const {
		isOpen: isModalOpen,
		onOpen: onModalOpen,
		onOpenChange: onModalOpenChange,
	} = useDisclosure();

	let matchResult, result, date;
	const [matchData, setMatchData] = useState([matchResult, result, date]);
	const data = teamData?.map(function (a: any, i: string | number) {
		const originalDate = new Date(teamData[i].status?.utcTime);
		const formattedDate = originalDate.toISOString().split("T")[0];
		let scoredTitle;
		if (teamData[i].status?.finished == true) {
			scoredTitle = `${teamData[i].home.name} ${teamData[i].home.score} vs ${teamData[i].away.name} ${teamData[i].away.score}`;
		} else {
			scoredTitle = `${teamData[i].home.name}  vs ${teamData[i].away.name} `;
		}

		return {
			title: scoredTitle,
			start: formattedDate,
			color: teamData[i].home.name == "Arsenal" ? "#ff0000" : "#6E6E6E",
			detail: teamData[i].status?.scoreStr,
		};
	});
	function handleEventClick(e: any) {
		if (e.event._def.extendedProps.detail == undefined) {
			result = "경기전";
		} else result = e.event._def.extendedProps.detail;
		date = new Date(e.event._instance.range.start);
		matchResult = e.event.title;
		setMatchData([matchResult, result, date]);
		onModalOpen();
	}

	const matches = useMediaQuery("(min-width: 768px)");
	const calendarRef = useRef<FullCalendar>(null);

	useLayoutEffect(() => {
		const calendarApi = calendarRef!.current!.getApi();
		calendarApi.changeView(matches ? "dayGridMonth" : "listMonth");
	}, [matches]);

	return (
		<div>
			<div>
				<FullCalendar
					plugins={[listPlugin, dayGridPlugin, interactionPlugin]}
					ref={calendarRef}
					initialView={matches ? "dayGridMonth" : "listMonth"}
					dayMaxEvents={true}
					events={data}
					height={"600px"}
					eventClick={handleEventClick}
					eventDisplay={"auto"}
				/>
				<MatchdayModal
					isModalOpen={isModalOpen}
					onModalOpenChange={onModalOpenChange}
					matchData={matchData}
				/>
			</div>
		</div>
	);
}

export default Calendar;

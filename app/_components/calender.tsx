"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventContentArg } from "@fullcalendar/core";
import { Card, CardBody } from "@nextui-org/react";
function Calendar({ teamData }: any) {
	const data = teamData?.map(function (a: any, i: string | number) {
		const originalDate = new Date(teamData[i].status?.utcTime);
		const formattedDate = originalDate.toISOString().split("T")[0];
		return {
			title: `${teamData[i].home.name} vs ${teamData[i].away.name}`,
			start: formattedDate,
			color: teamData[i].home.name == "Arsenal" ? "#ff0000" : "#6E6E6E",
		};
	});

	function handleEventClick(clickInfo: any) {
		const date = new Date(clickInfo.event._instance.range.start);

		alert(` ${clickInfo.event.title} ${date}`);
	}

	let eventContent = (eventInfo: EventContentArg) => {
		console.log(eventInfo);
		return (
			<Card>
				<CardBody>
					<b>{eventInfo.event.title}</b>
					<p>Time:{eventInfo.timeText}</p>
				</CardBody>
			</Card>
		);
	};
	return (
		<FullCalendar
			plugins={[dayGridPlugin, interactionPlugin]}
			initialView="dayGridMonth"
			dayMaxEvents={true}
			events={data}
			height={"600px"}
			eventClick={handleEventClick}
		/>
	);
}

export default Calendar;

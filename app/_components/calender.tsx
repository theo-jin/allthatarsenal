"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({ teamData }: any) {
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

	function handleEventClick(clickInfo: any) {
		let result;
		if (clickInfo.event._def.extendedProps.detail == undefined) {
			result = "경기전";
		} else result = clickInfo.event._def.extendedProps.detail;
		const date = new Date(clickInfo.event._instance.range.start);

		alert(` ${clickInfo.event.title} \n ${date} \n 결과:${result} `);
	}

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

import { title } from "@/app/_components/primitives";
import Fotmob from "fotmob";
import Calendar from "../../_components/calender";
import { Metadata } from "next";

export const metadata: Metadata = {
	//Metadata는 모든 페이지의 head태그와 같은 역할을 한다고 생각하자.
	title: "Match Day",
	description: "Match Day",
};

export default async function MatchdayPage() {
	const fotmob = new Fotmob();
	let teamData: any = (
		await fotmob.getTeam(9825, "overview", "team", "America/New_York")
	).overview?.overviewFixtures;
	// let dd: any = (
	// 	await fotmob.getTeam(9825, "overview", "team", "America/New_York")
	// ).squad;
	// const attackers = dd.find(
	// 	(role: { title: string }) => role.title === "attackers",
	// );
	// console.log(attackers);

	return (
		<div>
			<h1 className={title()}>Match Day</h1>
			<Calendar teamData={teamData} />
		</div>
	);
}

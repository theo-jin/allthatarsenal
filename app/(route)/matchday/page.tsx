import { title } from "@/app/_components/primitives";
import Fotmob from "fotmob";
import Calendar from "../../_components/calender";

export default async function MachdayPage() {
	const fotmob = new Fotmob();
	let teamData: any = (
		await fotmob.getTeam(9825, "overview", "team", "America/New_York")
	).overview?.overviewFixtures;

	return (
		<div>
			<h1 className={title()}>Match Day</h1>
			<Calendar teamData={teamData} />
		</div>
	);
}

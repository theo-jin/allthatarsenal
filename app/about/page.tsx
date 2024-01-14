import { title } from "@/components/primitives";
import Fotmob from 'fotmob';


export default async function AboutPage() {
	const fotmob = new Fotmob();
	let team = await fotmob.getTeam(9825, "overview", "team", "America/New_York")
	console.log(team)
	return (
		<div>

			<h1 className={title()}>About</h1>
		</div>
	);
}

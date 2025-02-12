import { title } from "@/app/_components/primitives";
import { Metadata } from "next";
import Calender from "@/app/_components/Calender";
import { fetchMatches } from "@/app/_actions/fetchMatchData";

export const metadata: Metadata = {
	title: "Match Day",
	description: "Arsenal's matches",
};

export default async function MatchDay() {
	try {
		const matches = await fetchMatches();
		return (
			<div className="container mx-auto px-4">
				<h1 className={`${title()} text-center my-8`}>Match Day</h1>
				<Calender matches={matches} />
			</div>
		);
	} catch (error) {
		console.error("Error fetching matches:", error);
		return (
			<div className="container mx-auto px-4 text-center">
				<h1 className={`${title()} my-8`}>Match Day</h1>
				<p className="text-red-500">
					Failed to load match data. Please try again later.
				</p>
			</div>
		);
	}
}

export async function fetchMatches() {
	const response = await fetch(
		"https://api.football-data.org/v4/teams/57/matches",
		{
			headers: {
				"X-Auth-Token": process.env.FOOTBALL_DATA_API_KEY!,
			},
		},
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch matches: ${response.statusText}`);
	}

	const data = await response.json();
	return data.matches;
}

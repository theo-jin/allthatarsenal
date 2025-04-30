export const fetchPlayerList = async () => {
	const res = await fetch("/api/player/getPlayerList");
	if (!res.ok) throw new Error("Network response was not ok");
	return res.json();
};

export const fetchPlayer = async () => {
	const res = await fetch("/api/player/getPlayerList");
	if (!res.ok) throw new Error("Network response was not ok");
	return res.json();
};

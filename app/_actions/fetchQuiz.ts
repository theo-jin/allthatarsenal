import { result } from "../_types";

export const fetchResult = async ({ context }: { context: result }) => {
	const res = await fetch(`/api/quiz/quizResult`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ context }),
	});

	if (!res.ok) throw new Error("Network response was not ok");
	return res.json();
};

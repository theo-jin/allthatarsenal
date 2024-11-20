export const fetchComments = async (playerId: string) => {
	const res = await fetch(`/api/comment/list?id=${playerId}`);
	if (!res.ok) throw new Error("Network response was not ok");
	return res.json();
};

export const addNewComment = async (comment: string, playerId: string) => {
	const res = await fetch("/api/comment/new", {
		method: "POST",
		body: JSON.stringify({
			comment,
			_id: playerId,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) throw new Error("Network response was not ok");
	return res.json();
};

export const deleteComment = async (commentId: string) => {
	const res = await fetch("/api/comment/delete", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: commentId }),
	});

	if (!res.ok) throw new Error("Network response was not ok");
	return res.json();
};

export const editComment = async (commentId: string, comment: string) => {
	const res = await fetch("/api/comment/edit", {
		method: "POST",
		body: JSON.stringify({
			_id: commentId,
			comment: comment,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		throw new Error("Failed to edit comment");
	}

	return res.json();
};

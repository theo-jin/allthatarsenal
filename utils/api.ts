export async function checkEmailDuplicate(email: string) {
	try {
		const response = await fetch("/api/auth/check-duplicate", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email }),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.error || "이메일 확인 중 오류가 발생했습니다.");
		}

		return data;
	} catch (error) {
		console.error("Email check error:", error);
		throw error;
	}
}

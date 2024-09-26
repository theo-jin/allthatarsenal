export const signUp = async (name: string, email: string, password: string) => {
	try {
		const res = await fetch("/api/auth/signup", {
			method: "POST",
			body: JSON.stringify({
				name,
				email,
				password,
				role: "user",
				favorites: {},
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const resData = await res.json();
		return res.ok ? resData : Promise.reject(resData);
	} catch (error) {
		throw new Error("Network error occurred.");
	}
};

export const checkDuplicateAccount = async (email: string) => {
	try {
		const res = await fetch("/api/auth/checkingDuplicateAccounts", {
			method: "POST",
			body: JSON.stringify({ email }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const resData = await res.json();
		return res.ok ? resData : Promise.reject(resData);
	} catch (error) {
		throw new Error("중복 검사 중 오류가 발생했습니다. 다시 시도해주세요.");
	}
};

"use client";

import React, { useState } from "react";
import { title, subtitle } from "@/app/_components/primitives";
import { useRouter } from "next/navigation";
import { checkDuplicateAccount, signUp } from "@/app/_actions/fetchAuth";
import { z, ZodError } from "zod";

const emailSchema = z
	.string()
	.email({ message: "이메일은 @와.을 포함해야합니다." });
const passwordSchema = z
	.string()
	.min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
	.max(20, { message: "비밀번호는 20자 이하여야 합니다." });
const nameSchema = z.string().min(1, { message: "이름을 입력해주세요." });

type ValidationError = ZodError | Error | any;

export default function Page() {
	const router = useRouter();
	const [showErr, setShowErr] = useState("");
	const [showDuplicate, setShowDuplicate] =
		useState("이메일 중복검사를 해주세요");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		// zod를 이용해서 유저검증
		try {
			emailSchema.parse(email);
			passwordSchema.parse(password);
			nameSchema.parse(name);

			if (password !== passwordConfirm) {
				throw new Error("비밀번호와 비밀번호 확인이 일치하지 않습니다");
			}

			// 조드가 검증됐을때 진행
			const response = await signUp(name, email, password);
			if (response) {
				router.push("/registdone");
			}
		} catch (error: ValidationError) {
			if (error instanceof ZodError) {
				setShowErr(error.errors.map((err) => err.message).join(", "));
			} else {
				setShowErr(error.message || "이메일과 비밀번호를 다시 확인해주세요");
			}
		}
	};

	const handleDuplicateAccount = async (e: { preventDefault: () => void }) => {
		e.preventDefault();

		try {
			emailSchema.parse(email);

			const response = await checkDuplicateAccount(email);
			setShowDuplicate(response.message);
		} catch (error: ValidationError) {
			if (error instanceof ZodError) {
				setShowDuplicate(error.errors[0].message);
			} else {
				setShowDuplicate(
					error.message ||
						"중복 검사 중 오류가 발생했습니다. 다시 시도해주세요.",
				);
			}
		}
	};

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Join</h1>
					<h2 className={subtitle()}>ALL THAT ARSENAL의 멤버가 되세요!</h2>
				</div>
			</section>

			<form onSubmit={handleSubmit}>
				<main className="flex flex-col items-center p-3">
					<div className="sm:w-1/3">
						<div>
							<label
								htmlFor="email"
								className="block text-sm text-gray-800 dark:text-gray-200"
							>
								Email
							</label>
							<div className="mt-1">
								<input
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder="Email (@와. 포함)"
									id="email"
									name="email"
									type="email"
									required
									autoFocus={true}
									className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
								/>
								<div>
									<button
										type="button"
										onClick={handleDuplicateAccount}
										className="mt-2 rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-rose-600 focus:bg-gray-600 focus:outline-none"
									>
										중복검사
									</button>
									<div className="mt-2 block w-full">{showDuplicate}</div>
								</div>
							</div>
						</div>
						<div className="mt-2">
							<label
								htmlFor="name"
								className="block text-sm text-gray-800 dark:text-gray-200"
							>
								Name
							</label>

							<div className="mt-1">
								<input
									onChange={(e) => {
										setName(e.target.value);
									}}
									id="name"
									name="name"
									type="name"
									required
									placeholder="Name"
									className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
								/>
							</div>
						</div>

						<div className="mt-2">
							<label
								htmlFor="password"
								className="block text-sm text-gray-800 dark:text-gray-200"
							>
								Password
							</label>
							<div className="mt-1">
								<input
									type="password"
									id="password"
									name="password"
									placeholder="8자 이상 20자 이하"
									onChange={(e) => setPassword(e.target.value)}
									className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
								/>
							</div>
						</div>

						<div className="mt-2">
							<label
								htmlFor="passwordConfirm"
								className="block text-sm text-gray-800 dark:text-gray-200"
							>
								Password Confirm
							</label>
							<div className="mt-1">
								<input
									type="password"
									id="passwordConfirm"
									name="passwordConfirm"
									placeholder="8자 이상 20자 이하"
									onChange={(e) => setPasswordConfirm(e.target.value)}
									className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
								/>
							</div>
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-rose-600 focus:bg-gray-600 focus:outline-none"
							>
								Sign Up
							</button>
						</div>
					</div>
					<div className="mt-6">{showErr}</div>
				</main>
			</form>
		</>
	);
}

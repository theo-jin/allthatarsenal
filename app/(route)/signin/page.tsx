"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { title } from "@/app/_components/primitives";

export default function Page() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async () => {
		const result = await signIn("credentials", {
			email: email,
			password: password,
			redirect: true,
			callbackUrl: "/",
		});
	};

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-0 md:py-5">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Log In</h1>
				</div>
			</section>
			<main className="flex flex-col  items-center p-10">
				<div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm text-gray-800 dark:text-gray-200"
						>
							Email
						</label>

						<div className="mt-1">
							<input
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setEmail(e.target.value);
								}}
								id="email"
								name="email"
								type="email"
								required
								autoFocus={true}
								className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
							/>
						</div>
					</div>

					<div className="mt-4">
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
								onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
									setPassword(e.target.value);
								}}
								className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
							/>
						</div>
					</div>

					<div className="mt-6">
						<button
							onClick={handleSubmit}
							className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-rose-600 focus:bg-gray-600 focus:outline-none"
						>
							Log In
						</button>
					</div>
				</div>
			</main>
		</>
	);
}

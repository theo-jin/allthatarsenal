"use client";

import React, { useState, useRef } from "react";
import { title, subtitle } from "@/app/_components/primitives";

export default function Register() {
	const [showErr, setShowErr] = useState("");
	const [showDuplicate, setShowDuplicate] =
		useState("이메일 중복검사를 해주세요");
	const nameRef: any = useRef(null);
	const emailRef: any = useRef(null);
	const passwordRef: any = useRef(null);
	const passwordConfirmRef: any = useRef(null);
	const emailRegEx =
		/^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
	const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

	const handleSubmit = async () => {
		if (!emailRegEx.test(emailRef.current.value)) {
			setShowErr("이메일은 @와.을 포함해야합니다.");
			return;
		}
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			setShowErr("비밀번호와 비밀번호 확인이 일치하지 않습니다");
			return;
		}
		if (
			!passwordRegEx.test(passwordRef.current.value.length) ||
			!passwordRegEx.test(passwordConfirmRef.current.value.length)
		) {
			setShowErr("비밀번호와 비밀번호 확인은 8자 이상 20자 이하여야합니다.");
			return;
		}

		try {
			const res = await fetch("/api/auth/signUp", {
				method: "POST",
				body: JSON.stringify({
					name: nameRef.current.value,
					email: emailRef.current.value,
					password: passwordRef.current.value,
					role: "user",
					favorites: [],
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (res.ok) {
				// 요청이 성공적으로 완료되었을 때 수행할 작업
				window.location.href = "/";
			} else {
				const errorData = await res.json();
				setShowErr(
					errorData.message || "이메일과 비밀번호를 다시 확인해주세요",
				);
			}
		} catch (error) {
			// 요청이 실패하거나 예외가 발생했을 때 수행할 작업
			console.log(error);
			setShowErr("이메일과 비밀번호를 다시 확인해주세요");
		}
	};

	const duplicateAccount = async () => {
		if (!emailRegEx.test(emailRef.current.value)) {
			setShowDuplicate("이메일은 @와.을 포함해야합니다.");
			return;
		}
		try {
			const res = await fetch("/api/auth/checkingDuplicateAccounts", {
				method: "POST",
				body: JSON.stringify({
					email: emailRef.current.value,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const resData = await res.json();
			if (res.ok) {
				setShowDuplicate(resData.message);
			} else {
				setShowDuplicate(resData.error);
			}
		} catch (error) {
			console.log(error);
			setShowDuplicate("중복 검사 중 오류가 발생했습니다. 다시 시도해주세요.");
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
				<main className="flex flex-col  items-center p-3">
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
									ref={emailRef}
									onChange={(e) => {
										emailRef.current.value = e.target.value;
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
										onClick={duplicateAccount}
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
									ref={nameRef}
									onChange={(e) => {
										nameRef.current.value = e.target.value;
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
									ref={passwordRef}
									onChange={(e) => (passwordRef.current.value = e.target.value)}
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
									ref={passwordConfirmRef}
									onChange={(e) =>
										(passwordConfirmRef.current.value = e.target.value)
									}
									className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
								/>
							</div>
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full transform rounded-md bg-gray-700  px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-rose-600 focus:bg-gray-600 focus:outline-none"
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

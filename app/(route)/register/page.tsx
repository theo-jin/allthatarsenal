"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "@nextui-org/react";
import { title, subtitle } from "@/app/_components/primitives";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/_components/icons";

export default function Register() {
	const [showErr, setShowErr] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const [validInput, setValidInput] = useState(false);

	const [isVisible, setIsVisible] = React.useState(false);
	const [PwcisVisible, setPwcIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	const togglePwcVisibility = () => setPwcIsVisible(!PwcisVisible);
	const pwcRef = useRef();

	useEffect(() => {
		setShowErr("이메일과 비밀번호를 입력해주세요");
		// 이메일 및 비밀번호 유효성 검증
		if (
			email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) &&
			password.length >= 8 &&
			passwordConfirm.length >= 8
		) {
			setValidInput(true);
		} else {
			setValidInput(false);
		}
	}, [email, password, passwordConfirm]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			setShowErr("비밀번호가 일치하지 않습니다");
			return;
		}
		try {
			const response = await fetch("/api/auth/signup", {
				method: "POST",
				body: JSON.stringify({ name, email, password, role: "user" }),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				// 요청이 성공적으로 완료되었을 때 수행할 작업
				window.location.href = "/";
			}
		} catch (error) {
			// 요청이 실패하거나 예외가 발생했을 때 수행할 작업
			setShowErr("이메일과 비밀번호를 다시 확인해주세요");
		}
	};

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Join</h1>
					<h2 className={subtitle()}>ALL THAT ARSENAL의 멤버가 되세요!</h2>
				</div>
			</section>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
			>
				<div className="inline-block max-w-lg text-center justify-center">
					<Input
						isClearable
						type="text"
						label="Name"
						placeholder="Name"
						variant="bordered"
						value={name}
						onClear={() => console.log("input cleared")}
						onChange={(e) => setName(e.target.value)}
						className="max-w-xs"
					/>
				</div>

				<div className="inline-block max-w-lg text-center justify-center">
					<Input
						isClearable
						type="text"
						label="Email"
						placeholder="Email (@와. 포함)"
						variant="bordered"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onClear={() => console.log("input cleared")}
						className="max-w-xs"
					/>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<Input
						label="Password"
						variant="bordered"
						placeholder="8자 이상"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						endContent={
							<button
								className="focus:outline-none"
								type="button"
								onClick={toggleVisibility}
							>
								{isVisible ?
									<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								:	<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								}
							</button>
						}
						type={isVisible ? "text" : "password"}
						className="max-w-xs"
					/>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<Input
						label="Password"
						variant="bordered"
						placeholder="8자 이상"
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
						endContent={
							<button
								className="focus:outline-none"
								type="button"
								onClick={togglePwcVisibility}
							>
								{PwcisVisible ?
									<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								:	<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
								}
							</button>
						}
						type={PwcisVisible ? "text" : "password"}
						className="max-w-xs"
					/>
				</div>
				<div className="mt-6">
					<Button
						className={subtitle({ color: "pink" })}
						type="submit"
						disabled={!validInput}
					>
						Submit
					</Button>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<p className={subtitle()}>{showErr}</p>
				</div>
			</form>
		</>
	);
}

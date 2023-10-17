'use client'

import { useState, useEffect } from 'react';
import { Input, Button } from '@nextui-org/react';
import { title, subtitle } from "@/components/primitives";
export default function Register() {
	const [showErr, setShowErr] = useState("");
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [validInput, setValidInput] = useState(false);

	useEffect(() => {
		setShowErr("이메일과 비밀번호를 입력해주세요");
		// 이메일 및 비밀번호 유효성 검증
		if (
			email.includes("@") &&
			password.length >= 8 &&
			passwordConfirm.length >= 8
		)
			setValidInput(true);
		else setValidInput(false);
	}, [email, password, passwordConfirm]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== passwordConfirm) {
			setShowErr("비밀번호가 일치하지 않습니다");
			return;
		}
		try {
			const response = await fetch('/api/auth/signup', {
				method: 'POST',
				body: JSON.stringify({ name, email, password }),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				// 요청이 성공적으로 완료되었을 때 수행할 작업
				window.location.href = '/'
			}
		} catch (error) {
			// 요청이 실패하거나 예외가 발생했을 때 수행할 작업
		}
	};

	return (
		<>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Join</h1>
					<h2 className={subtitle()}>All that arsenal의 멤버가 되세요!</h2>
				</div>
			</section>


			<form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

				<div className="inline-block max-w-lg text-center justify-center">
					<Input
						size='md'
						clearable
						placeholder="Name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="inline-block max-w-lg text-center justify-center">
					<Input
						size='md'
						clearable
						placeholder="Email (@ 포함)"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<Input.Password
						size='md'
						type="password"
						placeholder="8자 이상"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">
					<Input.Password
						size='md'
						type="passwordConfirm"
						placeholder="8자 이상"
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
				</div>
				<div className="inline-block max-w-lg text-center justify-center">

					<Button flat color="primary" type="submit" disabled={!validInput}>
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
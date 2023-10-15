'use client'

import { useState, useEffect } from 'react';
import { Input, Button, Grid } from '@nextui-org/react';

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
		<Grid.Container gap={4} justify="center">
			<form onSubmit={handleSubmit}>
				<Grid>
					<h2>회원가입</h2>

					<Input
						size='md'
						clearable
						label="NAME"
						placeholder="Name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Grid>
				<Grid>
					<Input
						size='md'
						clearable
						label="EMAIL"
						placeholder="Email (@ 포함)"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Grid>
				<Grid>
					<Input.Password
						size='md'
						label="Password"
						type="password"
						placeholder="8자 이상"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Grid>
				<Grid>
					<Input.Password
						size='md'
						label="PasswordConfirm"
						type="passwordConfirm"
						placeholder="8자 이상"
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
				</Grid>
				<Grid>
					<p>{showErr}</p>
					<Button flat color="primary" type="submit" disabled={!validInput}>
						Submit
					</Button>
				</Grid>
			</form>
		</Grid.Container>
	);
}
'use client'

import { useState } from 'react';
import { Input, Button, Grid } from '@nextui-org/react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      } else {
        // 요청이 실패했을 때 수행할 작업
      }
    } catch (error) {
      // 요청이 실패하거나 예외가 발생했을 때 수행할 작업
    }
  };

  return (
    <Grid.Container gap={4} justify="center">
      <form onSubmit={handleSubmit}>
        <Grid>
          <Input
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
            clearable
            label="EMAIL"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid>
          <Input.Password
            labelPlaceholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid>
          <Button flat color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </Grid.Container>
  );
}
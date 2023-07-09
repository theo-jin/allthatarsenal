'use client'
import { Input,Spacer } from '@nextui-org/react';

export default function Register() {
    return (
      <>
       <form method="POST" action="/api/auth/signup">
      <Spacer y={2.5} />
      <Input clearable label="Name" placeholder="Name" initialValue="NextUI" />
      <Spacer y={2.5} />
      <Input.Password labelPlaceholder="Password" initialValue="nextui123" />
      </form>
    </>
    )
  }
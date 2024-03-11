'use client'
import { signIn } from 'next-auth/react'
import { Button } from "@nextui-org/button";

export const SignInBtn = () => {
    return (
        <Button
            className="text-sm font-normal text-default-600 bg-default-100 mr-2"
            variant="flat"
            onClick={() => signIn()}
        >
            Sign In
        </Button>
    )
}
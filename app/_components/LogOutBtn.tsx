'use client'
import { signOut } from "next-auth/react"
import { Button } from "@nextui-org/button";

export const LogOutBtn = () => {
    return (
        <Button
            className="text-sm font-normal text-default-600 bg-default-100 mr-2"
            variant="flat"
            onClick={() => signOut()}
        >
            Log Out
        </Button>
    )
}
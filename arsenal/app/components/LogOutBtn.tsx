'use client'
import { signOut } from "next-auth/react"
import {  Button } from "@nextui-org/react";

export default function LogOut(){
    return(
        <Button light color="primary" auto onClick={() => signOut()}>Log Out</Button>
    )
}

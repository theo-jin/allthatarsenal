'use client'

import{signIn} from'next-auth/react'
import {  Button } from "@nextui-org/react";

export default function SignInBtn(){
    return(
        <Button light color="primary" auto onClick={()=>{signIn()}}>Sign In</Button>
    )
}

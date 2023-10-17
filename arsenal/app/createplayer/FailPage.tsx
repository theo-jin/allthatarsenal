'use client'
import { Grid, Text } from "@nextui-org/react";
import Link from 'next/link';

export default function Register() {

    return (
        <>
            <Grid.Container justify="center">
                <Grid>
                    <Text h1 >
                        Available after Sign in
                    </Text>

                    <Link href={'/register'}>가입하러 가기</Link></Grid>
            </Grid.Container>

        </>
    )
}
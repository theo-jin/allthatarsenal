'use client'
import { Grid } from "@nextui-org/react";
import { PlayerCard } from "../components/PlayerCard";

export default function list(){

    return (
        <Grid.Container gap={2} justify="center">
           <Grid xs={12} sm={4}>
              <PlayerCard />
            </Grid>
            <Grid xs={12} sm={4}>
              <PlayerCard />
            </Grid>
            <Grid xs={12} sm={4}>
              <PlayerCard />
            </Grid>
            <Grid xs={12} sm={4}>
              <PlayerCard />
            </Grid>
          </Grid.Container>
        );
}
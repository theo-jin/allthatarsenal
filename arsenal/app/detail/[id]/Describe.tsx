'use client'
import {Card, Grid,Text,Spacer } from "@nextui-org/react";


export default function App({result}){

    return(
<Grid.Container justify="center">
<Grid >
<Spacer y={0.5} />
<Card variant="bordered" borderWeight="normal"  css={{ p: "$4", mw: "500px",borderRadius:"5px"     }} >
  
        <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}   justify="center">
             <Text h2>능력치</Text> 
          </Grid> 
        <Grid xs={3}>
          PACE:
          </Grid> 
          <Grid xs={3}>
          {result.pace}
          </Grid> 
          <Grid xs={3}>
          DRIBBLE:
          </Grid> 
          <Grid xs={3}>
          {result.dribble}
          </Grid> 
          <Grid xs={3}>
          SHOT:
          </Grid> 
          <Grid xs={3}>
         {result.shot}
          </Grid>
          <Grid xs={3}>
          PASS:
          </Grid> 
          <Grid xs={3}>
        {result.pass}
          </Grid> 
          <Grid xs={3}>
          PHYSICAL:
          </Grid> 
          <Grid xs={3}>
         {result.physical}
          </Grid> 
          <Grid xs={3}>
          DEFENCE:
          </Grid>  
          <Grid xs={3}>
        {result.defence}
          </Grid> 
          <Spacer y={1} />
          <Grid xs={12}>
          {result.describe}
          </Grid> 
        </Grid.Container>
          
    </Card>


</Grid>
</Grid.Container>
    )
}
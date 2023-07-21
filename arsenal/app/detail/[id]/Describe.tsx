'use client'
import {Card, Grid,Text,Spacer } from "@nextui-org/react";


export default function App({result}){

    return(
<Grid.Container justify="center">
<Grid >
<Spacer y={1} />
<Card variant="bordered" borderWeight="normal"  css={{ p: "$4", mw: "500px",borderRadius:"0px"     }} >
  
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
          {result.describe}
          </Grid> 
        </Grid.Container>
      
    
    
    </Card>


</Grid>
</Grid.Container>
    )
}
'use client'
import {Card, Grid,Text,Spacer } from "@nextui-org/react";


export default function App({result}:any){

    return(
<Grid.Container justify="center">
<Grid >
<Spacer y={1} />
<Card   variant="bordered" borderWeight="normal"  css={{ p: "$4", mw: "500px", borderEndEndRadius:"0px",borderBottomLeftRadius:"0px", borderBottom: "$borderWeights$bold solid $red600 "  }} >
      <Card.Header>
        <img
          alt="nextui logo"
          src={result.pic2}
          width="400px"
          
        
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h2 css={{ lineHeight: "$xs" }}>
            #{result.number}  {result.name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{result.role}</Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "black" }}>Birth: {result.birth.toDateString()}</Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "black" }}>Height: {result.height}cm</Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "black" }}>Nation team:</Text>
          </Grid> <img src={`https://www.countryflagicons.com/FLAT/32/${result.nation}.png`}/>
        </Grid.Container>
      </Card.Header>
   
    
    
    </Card>


</Grid>
</Grid.Container>
    )
}
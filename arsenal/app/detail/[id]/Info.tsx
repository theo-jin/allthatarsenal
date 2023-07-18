'use client'
import {Card, Grid,Text,Spacer } from "@nextui-org/react";
import Chart from "./Chart"

export default function App({result}){

    return(
//    <Grid.Container justify="center">
//     <Grid>
        
//         <Text h1> {result.name}</Text><Col span={1}>
//         <Image    width={30}
//               alt="flag" src={`https://www.countryflagicons.com/FLAT/32/${result.nation}.png`}></Image> </Col>
//         <Text h4>{result.role}</Text>
  
//         <Chart result={result}/>
//     </Grid>
//    </Grid.Container>
<Grid.Container justify="center">
<Grid >
<Spacer y={1} />
<Card   variant="bordered" borderWeight="normal"   isPressable css={{ p: "$4", mw: "500px"  }} >
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
            <Text css={{ color: "black" }}>Birth: {result.birth}</Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "black" }}>Height: {result.height}cm</Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "black" }}>Nation team</Text>
          </Grid> <img src={`https://www.countryflagicons.com/FLAT/32/${result.nation}.png`}/>
        </Grid.Container>
      </Card.Header>
   
      <Card.Body css={{ py: "$2" ,borderBottom: "$borderWeights$bold solid $red600"}}>
        <Text>
         
        </Text>
      </Card.Body>
    
    </Card>


</Grid>
</Grid.Container>
    )
}
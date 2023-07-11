'use client'

import { Link,Grid, Card, Col, Text } from "@nextui-org/react";

export default  function App({result}){ 
    
    console.log(result)
    return(
      <div>
<Grid.Container gap={2} justify="center">
          {result.map(function(a,i){
            return(
              <Link href={`/detail/${result[i]._id}`}>  
              <Grid xs={12} sm={4}> 

  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="black">
        <img src={`https://www.countryflagicons.com/FLAT/16/${result[i].nation}.png`}></img>  {result[i].name}
        </Text>
        <Text h4 color="white">
        {result[i].role}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={result[i].pic}
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
 
  </Card>            
            </Grid>
            </Link>
            )
          })}  
  
          </Grid.Container>
          </div>
)}
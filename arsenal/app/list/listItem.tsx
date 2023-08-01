'use client'

import { Link,Grid, Card, Col, Text,Row,Button } from "@nextui-org/react";
import { useState } from "react";

export default  function App({result}){ 

  
    return(
      <div>
    <Grid.Container justify="center">
                <Grid xs={6}><Text h1>Player List </Text></Grid>
                <Grid justify="flex-end" xs={6}>
                  <Text></Text>
            
                </Grid>  
                </Grid.Container>
         
<Grid.Container gap={2} justify="center">
          {result.map(function(a: any,i: string | number){
            return(
             
              <Grid xs={12} sm={4}> 

  <Card   isHoverable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={24} weight="bold" transform="uppercase" color="black">
      {result[i].name}
        </Text>
        <Text h4 color="black">
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
    /> <Card.Footer
    isBlurred
    css={{
      position: "absolute",
      bgBlur: "#0f111466",
      borderTop: "$borderWeights$light solid $gray800",
      bottom: 0,
      zIndex: 1,
    }}
  >
    <Row>
      <Col>
        <Row>
          <Col span={3}>
            <Card.Image
              src={`https://www.countryflagicons.com/FLAT/24/${result[i].nation}.png`}
              height={40}
              width={30}
              alt="flag"
            />
          </Col>
          <Col>
            <Text color="#d1d1d1" size={12}>
            {result[i].name}
            </Text>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row justify='space-evenly'>
          <Button
            flat
            auto
            css={{ color: "#94f9f0", bg: "#94f9f026" }}
          ><Link  href={`/detail/${result[i]._id}`}>  
            <Text
              css={{ color: "#F31260"
              }}
              size={12}
              weight="bold"
              transform="uppercase"
            >
              See more
            </Text></Link>
          </Button>
        </Row>
      </Col>
    </Row>
  </Card.Footer>
 
  </Card>            
            </Grid>
         
            )
          })}  
  
          </Grid.Container>
          </div>
)}
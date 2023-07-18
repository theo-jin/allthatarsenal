'use client'
import { Grid,Text,Container,Row,Card } from "@nextui-org/react";


export default function App({result}){

    return(
        <Container md>
            <Card>
            <Row justify="center" align="center">
            <Text  size={15} css={{ m: 10 }}>  {result.describe}</Text>
            </Row>
            </Card>
      </Container>
         
    
    )
}

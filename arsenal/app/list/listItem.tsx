'use client'

import { Link, Grid, Card, Col, Text, Row, Button } from "@nextui-org/react";
import { title } from "@/components/primitives";

export default function App({ result }: any) {


    return (
        <div>
            <section className="flex flex-col items-left justify-start gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-left justify-start">
                    <h1 className={title()}>Player List</h1>
                </div>
            </section>

            <Grid.Container gap={2} justify="center">
                {result.map(function (a: any, i: string | number) {
                    return (

                        <Grid xs={12} sm={4}>

                            <Card isHoverable>
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
                                                        src={`https://flagsapi.com/${result[i].nation}/flat/32.png`}
                                                        height={40}
                                                        width={30}
                                                        alt="flag"
                                                    />
                                                </Col>
                                                <Col>

                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Row justify='space-evenly'>
                                                <Button
                                                    flat
                                                    auto
                                                    css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                                ><Link href={`/detail/${result[i]._id}`}>
                                                        <Text
                                                            css={{
                                                                color: "#F31260"
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
    )
}
'use clinet'

import { Card, Col, Text } from "@nextui-org/react";

export const PlayerCard = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Odegaard_Profile_1100x693_0.jpg?auto=webp&itok=a6sVRzOB"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
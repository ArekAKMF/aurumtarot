import React from "react";

import { Text, Heading, Image, Box, Card, CardHeader, CardBody } from "@chakra-ui/react";


interface CardsProps {
  image: string;
  title: string;
  desc?: string;
  card?: string;
  description: string;
  layout: any;
}

const listLayout = (title: string, desc: any, description: string, image: string, card: any) =>
  <Card
    max-width="xl"
    borderWidth="1px"
    borderColor="#E7E9EC"
    overflow="hidden"
    padding="24px"
    background="#fff"
    marginBottom="10px"
    _hover={{
      background:
        "linear-gradient(22deg, rgba(255,255,255,1) 12%, rgba(222,226,230,1) 100%)",
    }}
    className={`animate__animated animate__bounce animate__delay-2s`}
  >
    <Box width='100%'>
      <Text>{desc}</Text>
      <Image
        src={"../../karty/" + image}
        alt={card}
        objectFit="cover"
        alignItems="center"
        justifyContent="center"
        mix-blendmode="color-burn"
      />
    </Box>

    <Box>

      <CardHeader marginTop="24px" marginBottom="24px" padding="0">
        <Heading
          as="h3"
          variant="sectionTitle"
          marginTop="0"
          marginBottom="0.5em"
          textAlign="center"
        >
          {title}
        </Heading>
        <Heading
          as="h3"
          variant="sectionTitle"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
        >
          {card}
        </Heading>
      </CardHeader>
      <CardBody padding="10px 0">
        <Text>{description}</Text>
      </CardBody>
    </Box>

  </Card>


const cardLayout = (title: string, desc: any, description: string, image: string, card: any) =>
  <Card
    max-width="lg"
    borderWidth="1px"
    borderColor="#E7E9EC"
    overflow="hidden"
    padding="24px"
    background="#fff"
    marginBottom="30px"
    flexDirection="row"
    _hover={{
      background:
        "linear-gradient(22deg, rgba(255,255,255,1) 12%, rgba(222,226,230,1) 100%)",
    }}
    className={`animate__animated animate__bounce animate__delay-2s`}
  >
    <Box>
      <CardHeader marginTop="24px" padding="0">
        <Image
          width="100%"
          maxWidth="400px"
          src={"../../karty/" + image}
          alt={card}
          alignItems="center"
          justifyContent="center"
          mix-blendmode="color-burn"
        />
      </CardHeader>
    </Box>
    <Box>
      <CardHeader marginTop="24px" marginBottom="12px" padding="0px 20px">
        <Heading
          as="h3"
          variant="sectionTitle"
          marginTop="0"
          marginBottom="0.5em"
          textAlign="center"
          fontSize="2em"
        >
          {title}
        </Heading>
        <Heading
          as="h3"
          variant="sectionTitle"
          marginTop="0"
          marginBottom="0"
          textAlign="center"
        >
          {card}
        </Heading>
      </CardHeader>
      <CardBody padding="10px 20px">
        <Text>{desc}</Text>
        <Text>{description}</Text>
      </CardBody>
    </Box>

  </Card>


export const Cards = ({
  image,
  title,
  desc,
  description,
  card,
  layout,
}: CardsProps) => {

  return (
    <>
      {layout === 0 && listLayout(title, desc, description, image, card)}
      {layout === 1 && cardLayout(title, desc, description, image, card)}
    </>
  )
};

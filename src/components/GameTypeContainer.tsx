import React from "react";
import { Heading, Image, Link } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";

interface GamesTypeContainerProps {
  image: string;
  title: string;
  url: string;
  desc: string;
  bg: string;
  index: number;
}

export const GamesTypeContainer = ({
  image,
  title,
  url,
  desc,
  index
}: GamesTypeContainerProps) => {

  const flipImage = index % 2 ? 'row-reverse' : 'row';
  const backgroundColors = ['#F7B2B7', '#8380B6', '#F7717D', '#759AAB', '#EE964B', '#E84855', '#EFBCD5', '#B07BAC', '#FAF0CA', '#7F2982', '#45F0DF', '#AFD2E9', '#DE639A']

  return (
    <Box
      margin="0"
      width="100%"
      key={url}
      as={Link}
      href={url}
      title={title}
      variant="link"
      padding="8px"
      background={backgroundColors[index]}
    >
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        maxW="8xl"
        flexWrap="nowrap"
        minH="500"
        margin="0 auto"
        flexDirection={["column", "column", flipImage, flipImage]}
      >
        <Box w={["auto", "auto", "70%", "70%", "100%", "100%"]}>
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            alignItems="flex-start"
            justifyContent="center"
            width="100%"
          />
        </Box>
        <Box maxW={["100%", "100%", "100%", "60%", "60%", "60%"]}>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Heading
              as="h3"
              variant="title"
              marginTop="0"
              textDecoration="none!important"
              margin={{base:"0 0 0.5em 0", sm:"1em 0", lg:"0 0 .5em 0", xl:"0 0 0.5em 0"}}
              padding="0 0 0 10px"
            >
              {title}
            </Heading>
            <Box>
              <Text
                fontSize="lg"
                padding="10px"
                textAlign="left"
              >
                {desc}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

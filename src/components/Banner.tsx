import React from "react";
import { Container, Flex, Heading, Box, Link } from "@chakra-ui/react";
import staticText from "@/const/StaticText";
import navigationList from "@/const/NavigationList";

export default function Banner({ locale }: any) {
    const appText = staticText[locale];
    const navList = navigationList[locale];
    return (
        <Container w="100%" maxW="12xl">
            <Flex
                h="auto"
                backgroundImage="../../karty-stol.jpg"
                backgroundRepeat="no-repeat"
                backgroundPosition="left center"
                minH="500px"
                backgroundSize="cover"
            >
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    w="100%"
                >
                    <Link
                        href={navList[2].url}
                        title={navList[2].name}
                        padding="20px"
                        background="#3182ce"
                        borderRadius="10px"
                    >
                        <Container maxW="6xl">
                            <Heading
                                as="h4"
                                variant="pageTitle"
                                marginTop="0"
                                textAlign="center"
                                fontWeight="800"
                                color="#fff"
                            >
                                {appText?.banerTitle}
                            </Heading>
                            <Heading
                                as="h4"
                                variant="pageTitle"
                                margin="0 20px"
                                textAlign="center"
                                fontWeight="800"
                                color="#fff"
                            >
                                {appText?.banerDesc}
                            </Heading>
                            <Heading
                                as="h4"
                                textAlign="center"
                                fontSize="20px"
                                color="#fff"
                                marginTop="20px"
                                fontWeight="800"
                            >
                                {appText?.banerButton}
                            </Heading>
                        </Container>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    );
}

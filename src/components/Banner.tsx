import React from "react";
import {
    Container,
    Flex,
    Text,
    Heading,
    Box,
    Link,
    Image,
} from "@chakra-ui/react";
import staticText from "@/const/StaticText";

export default function Banner({ locale }: any) {
    const appText = staticText[locale];
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
                    <Link href="/" padding="20px">
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
                            <Box>Wejdź</Box>
                        </Container>
                    </Link>
                </Flex>
            </Flex>
        </Container>
    );
}

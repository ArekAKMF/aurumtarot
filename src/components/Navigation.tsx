
import React from "react";
import {
    Box,
    Flex,
    Text,
    Image,
    Link,
    Container,
} from "@chakra-ui/react";
import navigationList from "@/const/NavigationList";
import staticText from "@/const/StaticText";

import Logo from '@/const/images'

interface Nav {
    lang: string;
}

export const Navigation = ({ lang }: Nav) => {
    const navList = navigationList[lang];
    const appText = staticText[lang];
    return (
        <Box>
            <Container maxW="8xl">
                <Flex
                    height={{ base: 'auto', sm: 'auto', md: '230px', xl: '230px' }}
                    justifyContent="space-between"
                    align="center"
                    padding="0"
                    alignItems="center"
                    flexDirection={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }}
                >
                    <Box height="100%">
                        <Link
                            variant="empty"
                            href={navList[0].url}
                            title={appText.pageName}
                            textDecoration="none!important"
                            padding="0"
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                height="100%"
                            >
                                <Image
                                    src={Logo}
                                    width="180px"
                                    padding="0 5px"
                                    alt="Logo"
                                    objectFit="cover"
                                />
                                <Text
                                    display={{ base: 'none', sm: 'none', md: 'block',  }}
                                    align="center"
                                    justifyContent="center"
                                    alignItems="center"
                                    fontSize="30px"
                                    fontWeight="bold"
                                    marginLeft="20px"
                                >
                                    {appText.pageName}
                                </Text>
                            </Flex>
                        </Link>
                    </Box>
                    <Flex height="100%"
                        align="center"
                        padding="0"
                        margin={{ base: '20px 0', sm: '20px 0 '  }}
                        alignItems="center">
                        {navList.map((el: any, index: number) => {
                            return (index !== 0 &&
                                <Link
                                    variant="empty"
                                    href={el.url}
                                    title={el.name}
                                    textDecoration="none!important"
                                    padding="0"
                                    key={index}
                                    paddingX="30px"
                                    height="100%"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    color="#000"
                                    fontWeight="bold"
                                    _hover={{
                                        backgroundColor: "#191919",
                                        color: "#fff"
                                    }}
                                >{el.name}</Link>
                            )
                        })}
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

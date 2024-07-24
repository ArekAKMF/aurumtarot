import { Container, Text, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
// import useFirebaseHook from '@/hooks/useFirebaseHook';

import { horoscop } from '@/const/gamesType'

export default function SingGames({
  path,
  locale,
}: any) {

  const [selectedCard, setSelectedCard] = useState<any>();
  const [card, setCard] = useState<any>();

  console.log('lang w znakach ', locale, 'ppppp', path)

  useEffect(() => {
    horoscop[locale].map((el: any) => {
      if (path.includes(el.url)) {
        const sc = el.url.split('-')[2];
        setCard(sc)
      }

    })

  }, [setCard, path, locale]);



  // const { data, loading, error, getDataFromFirebase } = useFirebaseHook(locale);
  // useEffect(() => {
  //   const setData = () => {
  //     // getDataFromFirebase({ section: title, currentDate })
  //     data && setSelectedCard(data);
  //   }
  //   setData();
  // }, [getDataFromFirebase, title, currentDate, data])


  return (
    <Container maxW="8xl" marginBottom="24px">

      <Text fontSize="lg" padding="10px 0" marginTop="40px" marginBottom="20px">
        {card}
      </Text>

      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >

      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {/* {selectedCard?.love} */}
      </Text>
      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >

      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {/* {selectedCard?.health} */}
      </Text>
      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {/* {selectedCard?.jobs} */}
      </Text>
    </Container>
  );
}

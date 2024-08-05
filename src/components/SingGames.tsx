import { Container, Text, Heading, Divider } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import useFirebaseHook from '@/hooks/useFirebaseHook';
import staticText from "@/const/StaticText";
import { horoscop } from '@/const/gamesType'

export default function SingGames({
  path,
  locale,
}: any) {

  const appText = staticText[locale];

  const [sing, setSing] = useState('')
  const [singDate, setSingDate] = useState('')

  const { data, loading, error, getDataFromFirebase } = useFirebaseHook(locale);

  useEffect(() => {

    horoscop[locale].forEach((el: any) => {
      if (path.includes(el.url)) {
        const sc = el.url.split('-')[2];
        const vir = path.split(sc)[1].split('-').slice(1, 4).join('-');
        setSing(sc)
        setSingDate(vir)
        getDataFromFirebase({ section: el.id, currentDate: vir })
      }
    })
  }, [path, locale, setSing, setSingDate, getDataFromFirebase]);

  return (
    <Container maxW="8xl" marginBottom="24px">

      <Heading as="h1" variant="pageTitle" textAlign="center" padding="10px 0" marginTop="40px">
        {appText.cardSingTitleLine1} &quot;{data?.name}&quot; {appText.cardSingTitleLine2} &quot;{sing.toUpperCase()}&quot;
      </Heading>
      <Heading as="h1" variant="pageTitle" textAlign="center" padding="10px 0" marginTop="0px" marginBottom="20px">
        {appText.cardSingTitleLine3} {singDate}
      </Heading>
      <Divider margin="1rem 0" />

      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >
        {appText.cardSingLove}
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {data?.love}
      </Text>
      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      >
        {appText.cardSingHealt}
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {data?.health}
      </Text>
      <Heading
        as="h3"
        variant="title"
        marginTop="0"
        textDecoration="none!important"
        marginBottom="0.5em"
      > {appText.cardSingWork}
      </Heading>
      <Text fontSize="lg" padding="10px 0" marginBottom="20px">
        {data?.jobs}
      </Text>
    </Container>
  );
}

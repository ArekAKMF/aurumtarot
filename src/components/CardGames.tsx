"use client";
import {
  Container,
  Button,
  Box,
  Grid,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Cards } from "@/components/Cards";
import { cards as cardslist } from "@/const/cards";
import { useData } from "@/hooks/useData";
import SectionTitle from "@/components/SectionTitle";
import staticText from "@/const/StaticText";
import { useGameType } from "@/hooks/useGameType";
import { usePathname } from "next/navigation";

const listTypeStatic = [["2", "2", "repeat(3, 1fr)"], ["1", "1", "repeat(1, 1fr)"]];

import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";

export default function CardGames({ locale, path }: any) {

  const appText = staticText[locale];
  const cartToTest = cardslist[locale]?.cards;
  const cards = useData();
  const game = useGameType(locale, path);

  const [cardTemp, setCardTemp] = useState<any>(cards?.allCards[locale]?.cards);
  const [selectedCard, setSelectedCard] = useState<any>([]);
  const [listType, setListType] = useState(0);

  const generateGameCards = () => {
    const cardCout = game.selectedGame.cardDesc?.length || 0;
    const sc = [];
    let i = 0;

    for (i; i < cardCout; i++) {
      const cardRandom = Math.floor(Math.random() * cartToTest.length);
      if (cardTemp[cardRandom]) {
        sc.push(cardTemp[cardRandom]);
        delete cardTemp[cardRandom];
      } else {
        i--;
      }
    }
    setSelectedCard(sc);
    setCardTemp([...cartToTest]);
    setTimeout(() => {
      scrollToElement()
    }, 500)
  };

  const scrollToElement = () => {
    const element = document.getElementById('gameCards');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const changeList = (id: any) => {
    setListType(id);
  }

  return (
    <Container maxW="8xl">
      {game.layoutCard === 1 && (
        <>
          <SectionTitle title={appText.cardTypeGame} />
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="auto"
            marginBottom="40px"
            borderRadius="25"
          >
            <AlertDescription maxWidth="lg">
              {appText?.cardgamesDescription}
              <Box maxW="200" margin="10px auto 0 auto">
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={() => generateGameCards()}
                >
                  {appText.cardgamesActionButton}
                </Button>
              </Box>
            </AlertDescription>
          </Alert>

          <Box id="gameCards">
            {selectedCard.length !== 0 && (
              <Box marginBottom="20px">
                <Button onClick={() => changeList(0)}><TfiLayoutMediaOverlay color={listType === 0 ? '#aaa' : '#000'} /></Button>
                <Button onClick={() => changeList(1)}><TfiLayoutListThumbAlt color={listType === 1 ? '#aaa' : '#000'} /></Button>
              </Box>
            )}
            <Grid
              templateColumns={listTypeStatic[listType]}
              gap={6}
              justifyContent="center"
              alignItems="stretch"
            >
              {selectedCard?.map((el: any, index: number) => (
                <Cards
                  image={el.images[0]}
                  title={game.selectedGame.cardDesc[index].name}
                  card={el.name}
                  desc={""}
                  description={el.desc[0]}
                  key={index}
                  layout={listType}
                />
              ))}
            </Grid></Box>
        </>
      )}
    </Container>
  )
}

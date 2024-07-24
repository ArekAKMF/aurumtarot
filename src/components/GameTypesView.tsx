import React from "react";
// import { GamesTypeContainer } from "@/components/gamesTypeContainer";
import { SimpleGrid, Container } from "@chakra-ui/react";
import { gamesType } from "@/const/gamesType";
import SectionTitle from "@/components/SectionTitle";
import staticText from "@/const/StaticText";
import { GamesTypeContainer } from "@/components/GameTypeContainer";


export default function GameTypesView({ locale }: any) {
  const appText = staticText[locale];
  const gameList = gamesType[locale];
  return (
    <>
      <Container maxW="8xl">
        <SectionTitle title={appText.cardTypeGame} />
      </Container>
      <Container maxW="8xl">
        <SimpleGrid columns={[1, 1, 1, 1]}>
          {gameList?.map((el: any, index: number) => {
            return (
              <GamesTypeContainer
                key={index}
                index={index}
                image={el.image ? el.image : "../../image.png"}
                title={el.name}
                desc={el.descshort}
                url={el.url}
                bg={el.background}
              />
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
}

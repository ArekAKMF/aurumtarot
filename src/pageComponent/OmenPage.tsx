import {
    Container,
    Button,
    Flex,
    Box,
    Grid,
    Alert,
    AlertDescription,
  } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import SectionTitle from "@/components/SectionTitle";

import staticText from "@/const/StaticText";

export default function OmenPage({
    path,
    locale,
  }: any) {

    const appText = staticText[locale];
  return (
    <Container borderTop="2px solid #aaa" maxW="8xl">
      <SectionTitle title={appText.cardTypeGame} />
      <div>WROZBA</div>
    </Container>
  )
}

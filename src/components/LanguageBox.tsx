"use client";
import React from "react";
import { Flex, FormLabel, Select, FormControl, Box } from "@chakra-ui/react";
import staticText from "@/const/StaticText";
import { useRouter } from "next/navigation";

export default function LanguageBox({ locale }: any) {
  const appText = staticText[locale];
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    const emptyLang = lang;

    console.log(emptyLang, 'EMPTY LANG')
    const newLang = lang == "en" ? "" : lang;
    router.push("/" + newLang, { scroll: false });
  };

  return (
    <Box>
      <Flex flexDirection="column" justifyContent="center">
        <FormControl as="fieldset">
          <FormLabel display="none" htmlFor="language">
            {appText.pageLanguage}
          </FormLabel>
          <Select
            placeholder=""
            onChange={(e) => changeLanguage(e.target.value)}
            value={locale}
            id="language"
            h="28px"
            marginTop="5px"
            background="#fff"
            border="1px solid #aaa"
            w="80px"
          >
            <option value="">--</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
            <option value="pl">PL</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
            <option value="nl">NL</option>
            <option value="it">IT</option>
          </Select>
        </FormControl>
      </Flex>
    </Box>
  );
}

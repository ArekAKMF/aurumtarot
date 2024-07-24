import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export default function SectionTitle({ title }: any) {
  return (
    <Box textAlign="center" overflow="hidden" marginBottom="24px" marginTop="24px">
      <Heading as="h2" variant="sectionTitlePage">
        {title}
      </Heading>
    </Box>
  );
}

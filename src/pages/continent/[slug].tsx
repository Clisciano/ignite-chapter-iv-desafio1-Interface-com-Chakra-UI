import { Flex } from "@chakra-ui/react";
import React from "react";
import ContinentBanner from "../../components/ContinentBanner";
import Content from "../../components/Content";
import Header from "../../components/Header"
import Cities from "../../components/Cities";

export default function Continent() {
  return(
    <Flex direction="column">
      <Header />
      <ContinentBanner />
      <Flex direction="column" maxW="1160" mx="auto" mb="10" px="1rem">
        <Content/>
        <Cities />
      </Flex>
    </Flex>
  )
}
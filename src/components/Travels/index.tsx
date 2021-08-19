import { Grid, GridItem } from "@chakra-ui/react";
import TravelTypes from "./travelTypes";


export default function Travels() {
  return (
    <Grid 
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelTypes icon="Nightlife" text="vida noturna"/>
      </GridItem>
      <GridItem>
        <TravelTypes icon="Beach" text="praia"/>
      </GridItem>
      <GridItem>
        <TravelTypes icon="Modern" text="moderno"/>
      </GridItem>
      <GridItem>
        <TravelTypes icon="Classic" text="classico"/>
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelTypes icon="More" text="e mais..."/>
      </GridItem>
    </Grid>
  )
}
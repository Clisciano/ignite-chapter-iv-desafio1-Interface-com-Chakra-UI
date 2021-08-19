import { Flex, Heading, } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Banner  from '../components/Banner'
import Header  from '../components/Header'
import Separator from '../components/Separator'
import Travels from '../components/Travels'
import Slider from '../components/Slider/'

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />
      <Banner />
      <Travels />
      <Separator />
      
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        
          Vamos nessa? <br />
          Então escolha seu continente.        
      </Heading>
      <Slider />
    </Flex>
  )
}

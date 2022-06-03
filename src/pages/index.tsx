import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import TravelType from '../components/TravelType'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Flex direction="column" justify="center" align="center">
        <Header isTheContinentPage={false}/>

        <Flex 
          backgroundImage='images/home/background.png' 
          backgroundRepeat='no-repeat' 
          backgroundSize='100% 335px'
          h='335px'
          w='100%' 
        >
          <Box>
            <Heading>5 Continentes, infinitas possibilidades.</Heading>
            <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Box>
          <Box>
            <Image src='images/home/airplane.png'></Image>
          </Box>
        </Flex>

        <Flex 
          width="100%" 
          justify="center" 
          align="center" 
          mt="80px" 
          mb="80px"
        >
          <Flex 
            width="80%" 
            justify="space-between" 
            align="center"
          >
            <TravelType source='images/home/cocktail.svg' text='vida noturna'/>
            <TravelType source='images/home/surf.svg' text='praia'/>
            <TravelType source='images/home/building.svg' text='moderno'/>
            <TravelType source='images/home/museum.svg' text='clássico'/>
            <TravelType source='images/home/earth.svg' text='e mais...'/>
          </Flex>
        </Flex>

        <Image src='images/home/divider.svg'></Image>

        <Text 
          fontSize="36px" 
          fontWeight="500" 
          w="50%" 
          textAlign="center" 
          mt="52px" 
          mb="52px"
        >
          Vamos nessa?<br/>Então escolha seu continente
        </Text>
      </Flex>
    </>
  )
}

export default Home

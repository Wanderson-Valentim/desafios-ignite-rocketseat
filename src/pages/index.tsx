import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import TravelType from '../components/TravelType'
import ContinentsSlide from '../components/ContinentsSlide';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header isTheContinentPage={true}/>

      <Flex direction="column" justify="center" align="center">

        <Flex 
          backgroundImage='images/home/background.png' 
          backgroundRepeat='no-repeat' 
          backgroundSize='100% 335px'
          justify="space-around"
          align="center"
          h='335px'
          w='100%' 
        >
          <Flex w="36%" gap="20px" flexDirection="column">
            <Heading fontWeight="500" color="light.text" fontSize="36px">5 Continentes,<br/>infinitas possibilidades.</Heading>
            <Text fontWeight="400" color="light.info" fontSize="20px" >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
          </Flex>

          <Box>
            <Image mt="96px" src='images/home/airplane.png'></Image>
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
          color="dark.text"
        >
          Vamos nessa?<br/>Então escolha seu continente
        </Text>

        <ContinentsSlide/>
      </Flex>
    </>
  )
}

export default Home

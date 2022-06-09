import { Flex, Box, Image, Heading, Text, Hide, Grid } from '@chakra-ui/react'
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

      <Header isTheContinentPage={false}/>

      <Flex 
        direction="column" 
        justify="center" 
        align="center"
      >
        <Flex 
          backgroundImage='images/home/background.png' 
          backgroundRepeat='no-repeat' 
          backgroundSize={["100% 163px","100% 163px","100% 335px"]}
          justify="space-around"
          align="center"
          h={["163px","163px","335px"]}
          w='100%' 
        >
          <Flex 
            w={["90%","90%","36%"]} 
            gap={["8px","8px","20px"]} 
            flexDirection="column"
          >
            <Heading 
              fontWeight="500" 
              color="light.text" 
              fontSize={["20px","20px","36px"]}
            >
              5 Continentes,<br/>infinitas possibilidades.
            </Heading>
            <Text 
              fontWeight="400" 
              color="light.info" 
              fontSize={["14px","14px","20px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Flex>

          <Box>
            <Hide below='md'>
              <Image mt={{base:"150px", lg:'96px'}} w={{base: '350px', lg: '431px'}} src='images/home/airplane.png'></Image>
            </Hide>
          </Box>
        </Flex>

        <Flex 
          width="100%" 
          justify="center" 
          align="center" 
          mt={["36px","36px","80px"]}
          mb={["36px","36px","80px"]}
        >
          <Grid
            rowGap={["24px","24px","0px"]}
            templateAreas={[`"type1 type2" "type3 type4" "type5 type5"`,
                            `"type1 type2" "type3 type4" "type5 type5"`, 
                            `"type1 type2 type3 type4 type5 "`]}
            gridTemplateColumns='auto'
            gridTemplateRows="auto"
            justifyContent="space-between" 
            alignContent="space-between"
            width="70%" 
          >
            <TravelType source='images/home/cocktail.svg' text='vida noturna' type='type1' />
            <TravelType source='images/home/surf.svg' text='praia' type='type2' />
            <TravelType source='images/home/building.svg' text='moderno' type='type3' />
            <TravelType source='images/home/museum.svg' text='clássico' type='type4' />
            <TravelType source='images/home/earth.svg' text='e mais...' type='type5' />
          </Grid>
        </Flex>

        <Image src='images/home/divider.svg' w={["60px","60px","90px"]}></Image>

        <Text 
          fontSize={["20px","20px","36px"]} 
          fontWeight="500" 
          w={["90%","90%","50%"]}
          textAlign="center" 
          mt={["24px","24px","52px"]} 
          mb={["20px","20px","52px"]}
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
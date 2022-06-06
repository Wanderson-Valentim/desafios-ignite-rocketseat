import { Box, Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import Cities from '../../components/Cities';
import ContinentPageInfo from '../../components/ContinentPageInfo';
import Header from '../../components/Header';

interface ContinentPageProps{
  continent:{
    name: string,
    description: string,
    numberOfLanguages: number,
    numberOfCountries: number,
    numberOfTop100Cities: number,
    banner: string,
    cities:{
      name: string,
      country: string,
      flag: string,
      image: string
    }[]
  }
}

export default function ContinentPage( { continent }:ContinentPageProps ){
  return(
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>

      <Header isTheContinentPage={true}/>

      <Flex
        backgroundImage={continent.banner}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        align="flex-end"
        h="500px"
      >
        <Text
          fontSize="48px"
          fontWeight="600"
          color="light.text"
          ml="140px"
          mb="59px"
        >
          {continent.name}
        </Text>
      </Flex>

      <Flex 
        flexDirection="column" 
        align="center"
        mt="80px"
        mb="35px"
      >
        <Flex 
          justify="space-between" 
          w="80%" 
          gap="70px"
          mb="80px"
        >
          <Flex w="52%">
            <Text
              fontSize="24px"
              fontWeight="400"
              color="dark.text"
              textAlign="justify"
            >
              {continent.description}
            </Text>
          </Flex>
          
          <ContinentPageInfo 
            numLanguages={continent.numberOfLanguages}
            numCountries={continent.numberOfCountries} 
            numTop100Cities={continent.numberOfTop100Cities} 
          />
        </Flex>

        <Box w="80%">
          <Text
            fontSize="36px"
            fontWeight="500"
            color="dark.text"
            mb="40px"
          >
            Cidades +100
          </Text>
        </Box>

        <Cities/>
        
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const continents:string[] = await (await fetch("http://localhost:3001/continents")).json()
    
    return { 
      paths: continents.map((continent) => {
        return { params: { slug: continent} }
      }),
      fallback: false,
    }
  }
  
  export const getStaticProps:GetStaticProps = async ({ params }) => {
    const { slug } = params as ParsedUrlQuery

    const continent = await (await fetch(`http://localhost:3001/${slug}`)).json()

    return{
      props: { continent }
    }
  };
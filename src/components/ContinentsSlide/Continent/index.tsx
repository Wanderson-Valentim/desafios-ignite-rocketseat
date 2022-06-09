import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ContinentProps{
    sourceImage: string,
    continent: string,
    route: string,
    children: string
}

export default function Continent( { sourceImage, continent, route, children }:ContinentProps ): JSX.Element{
    return(
        
        <Flex 
            align="center" 
            h="100%" 
            w="100%" 
            backgroundImage={sourceImage}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Box w="100%" h="100%">
                <Flex 
                    justify="center" 
                    align="center" 
                    h="100%" 
                    w="100%"
                >
                    <Link href={`/continent/${route}`}>
                        <ChakraLink h="100%" w="90%">
                            <Flex 
                                flexDirection="column" 
                                justify="center" 
                                align="center" 
                                gap="16px"
                                h="100%" 
                                w="100%"
                            >
                                <Text 
                                    color="light.text" 
                                    fontSize={["24px","24px","48px"]} 
                                    fontWeight="700"
                                >
                                    {continent}
                                </Text>
                                <Text 
                                    color="light.info" 
                                    fontSize={["14px","14px","24px"]} 
                                    fontWeight="700"
                                >
                                    {children}
                                </Text>
                            </Flex>
                        </ChakraLink>
                    </Link>
                </Flex>
            </Box>
        </Flex>
    )
}
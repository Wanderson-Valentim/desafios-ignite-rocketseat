import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps{
    city:{
        name: string,
        country: string,
        flag: string,
        image: string
    }
}

export default function CityCard( {city}:CityCardProps ){
    return(
        <Box w="256px" h="279px">

            <Image 
                src={city.image} 
                borderTopRadius="4px"
                h="173px"
                w="256px" 
            />

            <Flex 
                borderColor="rgba(255,186,8,0.5)"
                borderWidth="0px 2px 2px 2px" 
                borderBottomRadius="4px"
                h="106px" 
                align="certer"
                justify="center"
            >
                <Flex 
                    justify="space-between" 
                    align="center" 
                    w="80%"
                >
                    <Flex flexDirection="column" gap="12px">
                        <Text
                            fontSize="20px"
                            fontWeight="600"
                            color="dark.text"
                        >
                            {city.name} 
                        </Text>
                        <Text
                            fontSize="16px"
                            fontWeight="500"
                            color="dark.text"
                        >
                            {city.country} 
                        </Text>
                    </Flex>

                    <Image src={city.flag}  w="30px" h="30px" />
                </Flex>

            </Flex>
        </Box>
    );
}
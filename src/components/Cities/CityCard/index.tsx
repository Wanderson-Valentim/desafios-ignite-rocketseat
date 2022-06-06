import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function CityCard(){
    return(
        <Box w="256px" h="279px">

            <Image src="/images/api_images/cities/europe/londres.png" h="173" w="256px" borderTopRadius="4px"/>

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
                            Londres
                        </Text>
                        <Text
                            fontSize="16px"
                            fontWeight="500"
                            color="dark.text"
                        >
                            Reino Unido
                        </Text>
                    </Flex>
                <Image src="/images/api_images/flags/europe/reino-unido.png" w="30px" h="30px" />
                </Flex>

            </Flex>
        </Box>
    );
}
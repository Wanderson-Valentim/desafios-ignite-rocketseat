import { Box, Flex, Text, Image } from "@chakra-ui/react";

interface InfoProps{
    number: string,
    text: string,
    isElementWithIcon?: boolean
}

export default function Info( { number, text, isElementWithIcon=false }:InfoProps ){
    return(
        <Flex 
            flexDir="column" 
            align="center" 
            justify="center"
        >
            <Text 
                fontSize={["24px","24px","48px"]}
                fontWeight="600"
                color="highlight"
            >
                {number}
            </Text>

            <Flex justify="center" align="center" gap="5px">
                <Text
                    fontSize={["15px","18px","24px"]}
                    fontWeight="600"
                    color="dark.text"
                    whiteSpace="nowrap"
                >
                    {text}
                </Text>

                {isElementWithIcon && 
                    <Image 
                        src="/images/continent-page/info.svg" 
                        alt="Informações"
                        w={["10px","10px","16px"]}
                        h={["10px","10px","16px"]} 
                    />
                }
            </Flex>
        </Flex>
    );
  }
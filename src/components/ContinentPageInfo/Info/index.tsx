import { Flex, Text } from "@chakra-ui/react";

interface InfoProps{
    number: string,
    text: string
}

export default function Info( { number, text }:InfoProps ){
    return(
        <Flex 
            flexDir="column" 
            align="center" 
            justify="center"
        >
            <Text 
                fontSize="48px"
                fontWeight="600"
                color="highlight"
            >
                {number}
            </Text>
            <Text 
                fontSize="24px"
                fontWeight="600"
                color="dark.text"
                whiteSpace="nowrap"
            >
                {text}
            </Text>
        </Flex>
    );
  }
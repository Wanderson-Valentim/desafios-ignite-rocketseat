import { Flex, Image, Text, Hide, Box, GridItem } from "@chakra-ui/react";

interface TravelTypeProps{
    source: string,
    text: string,
    type: string
}

export default function TravelType({ source, text, type }: TravelTypeProps){
    return(
        <GridItem area={type}>
            <Flex 
                flexDir={["row","row","column"]} 
                h={["21px","21px","145px"]} 
                align="center" 
                justify={
                    [
                        (type == 'type1' || type=='type3')? 'flex-start' : 
                        ((type == 'type2' || type=='type4')? 'flex-end' : 'center'),
                        (type == 'type1' || type=='type3')? 'flex-start' : 
                        ((type == 'type2' || type=='type4')? 'flex-end' : 'center'), 
                        'center'
                    ] 
                }
                gap={["8px","8px","24px"]}
            >
                <Hide below='md'>
                    <Image 
                        src={source}
                        h={{base:"70px", lg: "85px"}}
                        w={{base:"70px", lg: "85px"}}
                    />
                </Hide>
                <Hide above='md'>
                    <Box 
                        backgroundColor="highlight" 
                        borderRadius="50%"
                        w="8px" 
                        h="8px" 
                    />
                </Hide>
                <Text 
                    color="dark.text" 
                    fontWeight="600" 
                    fontSize={["15px","18px", "18px","24px"]}
                >
                    {text}
                </Text>
            </Flex>
        </GridItem>
    );
}
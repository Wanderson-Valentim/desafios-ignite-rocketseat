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
                flexDir={["row","column"]} 
                h={["21px","145px"]} 
                align="center" 
                justify={
                    [
                        (type == 'type1' || type=='type3')? 'flex-start' : 
                        ((type == 'type2' || type=='type4')? 'flex-end' : 'center'), 
                        'center'
                    ] 
                }
                gap={["8px","24px"]}
            >
                <Hide below='sm'>
                    <Image 
                        src={source}
                        h="85px" 
                        w="85px"
                    />
                </Hide>
                <Hide above='sm'>
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
                    fontSize={["18px","24px"]}
                >
                    {text}
                </Text>
            </Flex>
        </GridItem>
    );
}
import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps{
    source: string
    text: string
}

export default function TravelType({ source, text }: TravelTypeProps){
    return(
        <Flex 
            flexDir="column" 
            h="145px" 
            align="center" 
            justify="center" 
            gap="24px"
        >
            <Image 
                src={source}
                h="85px" 
                w="85px"
            />
            <Text 
                color="dark.text" 
                fontWeight="600" 
                fontSize="24px"
            >
                {text}
            </Text>
        </Flex>
    );
}
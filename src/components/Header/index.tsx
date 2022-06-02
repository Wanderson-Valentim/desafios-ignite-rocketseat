import { Image, Flex, Box, HStack } from '@chakra-ui/react'

interface HeaderProps{
    isTheContinentPage: boolean
}

export default function Header({ isTheContinentPage }:HeaderProps): JSX.Element{
    return(
        <Flex 
            justify="center" 
            align="center"
            h="100px"
        >
            {
                isTheContinentPage && 
                <Image 
                    src="images/header/return-icon.svg" 
                    alt="return" w="32px" 
                    h="32px" 
                />
            }

            <Flex 
                justify="center" 
                align="center"
            >
                <Image 
                    src="images/header/logo.png" 
                    alt="logo" 
                    w="184px" 
                    h="46px" 
                />
            </Flex>
        </Flex>
    )
}
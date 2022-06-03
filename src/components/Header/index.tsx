import { Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps{
    isTheContinentPage: boolean
}

export default function Header({ isTheContinentPage }:HeaderProps): JSX.Element{
    return(
        <Flex 
            justify={ isTheContinentPage ? "flex-start" : "center"}
            h="100px"
        >
            {
                isTheContinentPage && 
                <Flex align="center" w="calc(50% - 92px)">
                    <Link href="/">
                        <ChakraLink ml="20%">
                            <Image 
                                src="images/header/return-icon.svg" 
                                alt="return"
                                w="32px" 
                                h="32px"
                            />
                        </ChakraLink>
                    </Link>
                </Flex>
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
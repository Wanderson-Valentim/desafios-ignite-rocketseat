import { Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

interface HeaderProps{
    isTheContinentPage: boolean
}

export default function Header({ isTheContinentPage }:HeaderProps): JSX.Element{
    return(
        <Flex 
            justify={ isTheContinentPage ? "flex-start" : "center"}
            h={["50px","50px","100px"]}
        >
            {
                isTheContinentPage && 
                <Flex align="center" w={["calc(50% - 40.5px)","calc(50% - 40.5px)","calc(50% - 92px)"]}>
                    <Link href="/">
                        <ChakraLink ml="20%">
                            <Image 
                                src="/images/header/return-icon.svg" 
                                alt="return"
                                w={["16px","16px","32px"]}
                                h={["16px","16px","32px"]}
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
                    src="/images/header/logo.png" 
                    alt="logo" 
                    w={["81px","81px","184px"]} 
                    h={["20px","20px","46px"]} 
                />
            </Flex>
        </Flex>
    )
}
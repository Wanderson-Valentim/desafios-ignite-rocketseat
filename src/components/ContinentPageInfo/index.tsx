import { Flex, Image } from "@chakra-ui/react";
import Info from "./Info";

interface ContinentPageInfoProps{
    numLanguages: number,
    numCountries: number,
    numTop100Cities: number
}


export default function ContinentPageInfo( { numLanguages, numCountries, numTop100Cities }:ContinentPageInfoProps ){
    return(
        <Flex align="center" gap="6px">
            <Flex gap="42px">
                <Info number={String(numCountries)} text="países" />
                <Info number={String(numLanguages)} text="línguas" />
                <Info number={String(numTop100Cities)} text="cidades +100" />
            </Flex>

            <Flex 
                align="flex-end" 
                w="16px" 
                h="99px"
            >
                <Image 
                    src="/images/continent-page/info.svg" 
                    alt="Informações"
                    w="16px" 
                    h="16px" 
                    mb="6px"
                />
            </Flex>
        </Flex>
    );
  }
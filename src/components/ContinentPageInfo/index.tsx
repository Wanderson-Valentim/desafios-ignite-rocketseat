import { Flex, Image } from "@chakra-ui/react";
import Info from "./Info";

interface ContinentPageInfoProps{
    numLanguages: number,
    numCountries: number,
    numTop100Cities: number
}


export default function ContinentPageInfo( { numLanguages, numCountries, numTop100Cities }:ContinentPageInfoProps ){
    return(
        <Flex align="center" justify="center">
            <Flex gap={["15px","39px","42px"]}>
                <Info number={String(numCountries)} text="países" />
                <Info number={String(numLanguages)} text="línguas" />
                <Info number={String(numTop100Cities)} text="cidades +100" isElementWithIcon={true}/>
            </Flex>
        </Flex>
    );
  }
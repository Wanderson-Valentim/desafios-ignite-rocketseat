import { Grid, GridItem } from '@chakra-ui/react'
import CityCard from "./CityCard";

interface CitiesProps{
    continent:string,
    cities:{
        name: string,
        country: string,
        flag: string,
        image: string
    }[]
}

export default function Cities( { continent, cities }:CitiesProps ){
    return(
        <Grid 
            templateColumns={{base: "repeat(1, auto)", md:"repeat(3, auto)", xl:"repeat(4, auto)"}} 
            justifyContent={["center","center","space-between"]}
            gridRowGap={["20px","20px","48px"]} 
            w={{base: "100%", md:"95%", xl:"85%"}} 
        >
            {cities.map((city, index) => (
                <GridItem key={continent+String(index)}>
                    <CityCard city={city}/>
                </GridItem>
            ))}
        </Grid>
    );
}
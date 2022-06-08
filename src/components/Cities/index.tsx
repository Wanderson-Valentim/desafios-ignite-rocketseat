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
            templateColumns={["repeat(1, auto)","repeat(4, auto)"]} 
            justifyContent={["center","space-between"]}
            gridRowGap={["20px","48px"]} 
            w={["100%","80%"]}
        >
            {cities.map((city, index) => (
                <GridItem key={continent+String(index)}>
                    <CityCard city={city}/>
                </GridItem>
            ))}
        </Grid>
    );
}
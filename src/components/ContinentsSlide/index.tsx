import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Flex } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.module.css"

import Continent from "./Continent";

export default function ContinentsSlide(): JSX.Element{
    return(
        <Flex 
            w={["100%","85%"]} 
            height={["250px","450px"]} 
            mb={["24px","40px"]}
        >
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Continent sourceImage="images/home/asia.png" continent="Ásia" route="asia">O continente mais visitado.</Continent>
                </SwiperSlide>

                <SwiperSlide>
                    <Continent sourceImage="images/home/europa.png" continent="Europa" route="europe">O continente mais antigo.</Continent>
                </SwiperSlide>

                <SwiperSlide>
                    <Continent sourceImage="images/home/america.png" continent="América" route="america">O continente mais.</Continent>
                </SwiperSlide>

                <SwiperSlide>
                    <Continent sourceImage="images/home/africa.png" continent="África" route="africa">O continente mais surpreendente.</Continent>
                </SwiperSlide>

                <SwiperSlide>
                    <Continent sourceImage="images/home/oceania.png" continent="Oceania" route="oceania">O continente mais.</Continent>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}
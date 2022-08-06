import { Button, Box } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import axios from 'axios';

export default function Home(): JSX.Element {
  const fetchImages = async ({ pageParam = null }) => {
    const res = await api.get('/api/images', { 
      params: { 
        after: pageParam 
      } 
    })
    return res.data
  }

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchImages
    ,
    {
      getNextPageParam: result => result.after || null
    }
  );

  const formattedData = useMemo(() => {
    if (data){
      const formatting = data.pages.map(image => (image.data)).flat()
      return formatting
    }
    else{
      return []
    }
  }, [data]);

  if (isLoading){
    return <Loading/>
  }

  if (isError){
    return <Error/>
  }


  return (
    <>
      <Header />  

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />

        {hasNextPage &&
          <Button
            bgColor="orange.500"
            color="pGray.50"
            borderRadius="6px"
            w="134px"
            h="40px"
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Carregando..." : "Carregar mais" }
          </Button>
        }
      </Box>
    </>
  );
}

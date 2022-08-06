import { Box, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { string } from 'yup';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectImageUrl, setSelectImageUrlState] = useState('')

  const viewImage = (url:string) => {
    setSelectImageUrlState(url)
    onOpen()
  }

  return (
    <>
      <SimpleGrid columns={3} spacing={"40px"}>
        {
          cards.map(dataCard => {
            return <Card key={dataCard.id} data={dataCard} viewImage={viewImage}/>
          })
        }
      </SimpleGrid>

      {isOpen &&
        <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={selectImageUrl} />
      }
    </>
  );
}
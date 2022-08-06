import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return(
    <Modal isCentered isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
        <ModalContent w='fit-content' maxW='none' backgroundColor='pGray.800'>
          <ModalBody w='fit-content' padding='0px'>
            <Image 
              objectFit="cover" 
              src={imgUrl}
              maxW='900px'
              maxH='600px' 
            />
          </ModalBody>

          <ModalFooter justifyContent='flex-start'>
            <Link 
              href={imgUrl} 
              color='pGray.50' 
              fontWeight='400' 
              fontSize='14px' 
              target='_blank' 
            >Abrir original</Link>
          </ModalFooter>
        </ModalContent>
    </Modal>
  )
}

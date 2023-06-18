import React from 'react';
import {Link} from "react-router-dom";
import {BiMenuAltLeft} from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button, 
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>YOU MODULE PAGE</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'> 
                <Link to={'/'}>Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/modules'}>Free Modules</Link>
              </Button>
              {/* <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/module?category=free'}>Free Module</Link>
              </Button> */}
              <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                <Link to={'/upload'}>Upload Module</Link>
              </Button>
            </VStack>
            <HStack pos={'absolute'}
            bottom={'10'} left={'10'} w={'full'} justifyContent={'space-evenly'} >
              <Button onClick={onClose}>
                <Link to={'LogIn'}>Log In</Link>
              </Button>
              <Button onClick={onClose}>
                <Link to={'SignUp'}>Sign Up</Link>
              </Button>
            </HStack>

          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header

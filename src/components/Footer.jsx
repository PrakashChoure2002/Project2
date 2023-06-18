import React from 'react';
import {Box,
    Button,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    VStack} from '@chakra-ui/react';
    import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['coloum','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'} >
                <Heading size={'md'} textTransform={'uppercase'}>
                    Get More Updates...
                </Heading>
                <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 40px 40px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>Module</Heading>
                <Text>All Right Reserved</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                    <Button   variant={'link'} colorScheme={'whiteAlpha'}>
                        <a   target='blank'href='http://localhost:3000/'>Youtube</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        < a target='blank'href='http://localhost:3000/'>Instagram</a>
                    </Button>
                    <Button  variant={'link'} colorScheme={'whiteAlpha'}>
                        <a  target='blank' href='http://localhost:3000/'>Github</a>
                    </Button>
                </VStack>


          

        </Stack>

    </Box>
  )
}

export default Footer




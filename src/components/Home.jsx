import React from 'react';
import {Box, Heading, Container, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import timage1 from '../assets/timage1.avif';
import timage2 from '../assets/timage2.avif';
import timage3 from '../assets/timage3.avif';
import timage4 from '../assets/timage4.avif';
import timage5 from '../assets/timage5.avif';
const headingOptions ={

  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return(
    <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
      <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
        Service

      </Heading>
      <Stack
       h="full"
       p={'4'}
       alignItems={'center'}
       direction={['column', 'row','row']}  >
        <Image src={timage5} w={[300, 400, 500]} filter={'hue-rotate(-530deg)'}/>
        <Text letterSpacing={'2'}  > 
       
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus molestias laborum. Corrupti veniam asperiores in quae beatae, cumque nobis harum eveniet dolore tempore necessitatibus numquam tenetur doloremque voluptas quas dicta iusto laudantium eos! Vitae earum ad maiores quam cum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus molestias totam tempora cupiditate expedita inventore explicabo magni cum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia aperiam totam nam. Delectus, minima rem ab exercitationem aut dignissimos totam voluptate hic labore quisquam quod dolorem voluptas cupiditate accusamus perspiciatis magnam, vel officiis tempore dolore pariatur, quis quos at nulla excepturi. Ex!
         

        </Text>
      </Stack>
    </Container>
    </Box>
  );
  

};
const MyCarousel=()=>(

<Carousel 
autoPlay
infiniteLoop
interval={1000}
showStatus={false}
showThumbs={false}
showArrows={false}>

    <Box w="full" h={'100vh'}>
      <Image src={timage1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={timage2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={timage3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={timage4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={timage5} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
        Watch The Future
      </Heading>
    </Box>
    




</Carousel>

);

export default Home

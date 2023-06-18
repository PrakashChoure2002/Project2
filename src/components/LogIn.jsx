
import React from 'react';
import{Container, Heading, Input, VStack,Button,Text} from '@chakra-ui/react';
import { Link} from 'react-router-dom';

const LogIn = () => {
  return (
    <Container maxW={'Container.xl'} h={'100vh'} p={'16'}>
    <from>
        <VStack alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}>
            <Heading>WelCome TO Page</Heading>
            <Input placeholder='Email' type='email' focusBorderColor={'purple.500'} required/>
            <Input placeholder='Password' type='password' focusBorderColor={'purple.500'} required/>
            <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>

            <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>

        </VStack>
    </from>
    </Container>
  )
}

export default LogIn



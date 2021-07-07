/* eslint-disable react-hooks/rules-of-hooks */
import { Heading, Grid, Flex, Input, Box, Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import dark from '../styles/themes/dark';
import { useToast } from '../utils/useToast';
import { Loader } from '../components/Loader';

type User = {
  avatar: string;
  name: string;
  userName: string;
  followers?: number;
  following?: number;
  id: number;
  location: string;
  repos: number;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  const userName = useRef<HTMLInputElement>(null);

  async function getUserData() {
    setIsLoading(true);
    const value = userName.current?.value;

    try {
      const res = await fetch(`https://api.github.com/users/${value}`);
      const data = await res.json();
      const status = res.status;

      if (status === 404) {
        setIsLoading(false);
        useToast({
          type: 'error',
          message: 'Invalid user name',
          color: dark.colors.gray[600],
          background: 'white',
          duration: 3000,
        });
        return;
      }
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.debug(error);
    }
  }

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 380px 1fr"
      templateRows="1fr 380px 1fr"
      templateAreas="
        '. . .'
        '. form .'
        '. . .'
      "
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.800"
    >
      <Flex
        gridArea="form"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="15px"
      >
        <Heading size="lg" color="gray.300">
          GitHub Details
        </Heading>
        {!isLoading ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            marginTop="15px"
          >
            <Input
              color="gray.300"
              backgroundColor="gray.800"
              focusBorderColor="purple.500"
              borderTopRightRadius="none"
              borderBottomRightRadius="none"
              placeholder="User name here"
              ref={userName}
            />
            <Button
              backgroundColor="purple.500"
              borderRadius="none"
              _hover={{ backgroundColor: 'purple.600' }}
              onClick={getUserData}
            >
              Search
            </Button>
          </Box>
        ) : (
          <Loader
            marginTop="15px"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.300"
            color="purple.500"
            size="lg"
          />
        )}
      </Flex>
    </Grid>
  );
}

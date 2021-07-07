/* eslint-disable react-hooks/rules-of-hooks */
import { Heading, Grid, Flex, Input, Box, Button } from '@chakra-ui/react';
import { useContext, useRef, useState } from 'react';
import { Loader } from '../components/Loader';
import { UserContext } from '../contexts/UserContext';

export default function Home() {
  const { getUserData, isLoading, userNameRef } = useContext(UserContext);

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
              ref={userNameRef}
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

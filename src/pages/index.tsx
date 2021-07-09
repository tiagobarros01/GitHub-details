import { Heading, Grid, Flex, Input, Box, Button } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';

export default function Home() {
  const { userNameRef, redirectToUserPage } = useUser();

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
            onClick={redirectToUserPage}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
}

import { Heading, Grid, Flex, Input, Box, Button } from '@chakra-ui/react';

export default function Home() {
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
    >
      <Flex
        gridArea="form"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        padding="15px"
      >
        <Heading size="lg">GitHub Details</Heading>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          marginTop="15px"
        >
          <Input
            backgroundColor="gray.800"
            focusBorderColor="purple.500"
            borderTopRightRadius="none"
            borderBottomRightRadius="none"
            placeholder="Name of user"
            />
          <Button
            backgroundColor="purple.500"
            borderRadius="none"
            _hover={{ backgroundColor: 'purple.600' }}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </Grid>
  );
}

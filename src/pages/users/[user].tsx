import { Heading, Grid, Flex, Box, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Loader } from '../../components/Loader';
import { UserContext } from '../../contexts/UserContext';

export default function User() {
  const {
    query: { user },
  } = useRouter();
  const { isLoading, getUserData, userData, getUserRepos, repos } =
    useContext(UserContext);

  useEffect(() => {
    getUserData(String(user));
  }, [getUserData, user]);

  return (
    <Grid
      as="main"
      height="100vh"
      backgroundColor="gray.800"
      templateColumns="1fr 460px 1fr"
      templateRows="1fr 300px 1fr"
      templateAreas="
        '. . .'
        '. box .'
        '. . . '
      "
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Flex
          gridArea="box"
          boxShadow="0 2px 12px rgba(0, 0, 0, 0.4)"
          padding="15px"
          justifyContent="space-between"
          alignItems="center"
          height="100%"
          overflowY="scroll"
          color="gray.100"
        >
          <Box>
            <Image
              boxSize="16"
              borderRadius="full"
              src={userData.avatar}
              alt={userData.name}
            />
            <Heading color="gray.300" fontSize="2xl" marginTop="10px">
              {userData.name}
            </Heading>
            <Text color="gray.400" fontSize="large">
              {userData.userName}
            </Text>
          </Box>
          <Box>
            <Flex>
              <Text
                onClick={() => getUserRepos(String(user))}
                color="gray.400"
                marginRight="5px"
                cursor="pointer"
              >
                {userData.repos}
              </Text>
              <Text color="gray.300" fontSize="md">
                Repos
              </Text>
            </Flex>
            <Flex>
              <Text color="gray.400" marginRight="5px">
                {userData.followers}
              </Text>
              <Text color="gray.300" fontSize="md">
                Followers
              </Text>
            </Flex>
            <Flex>
              <Text color="gray.400" marginRight="5px">
                {userData.following}
              </Text>
              <Text color="gray.300" fontSize="md">
                Following
              </Text>
            </Flex>
          </Box>
          {repos}
        </Flex>
      )}
    </Grid>
  );
}

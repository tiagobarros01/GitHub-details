import { Heading, Flex, Box, Image, Text } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';

export function UserDetails() {
  const { userData } = useUser();

  return (
    <Flex
      boxShadow="0 2px 12px rgba(0, 0, 0, 0.4)"
      padding="15px"
      justifyContent="space-between"
      alignItems="center"
      // height="100%"
      // overflowY="scroll"
      // color="gray.100"
    >
      <Box marginRight="50px">
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
          <Text color="gray.400" marginRight="5px">
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
    </Flex>
  );
}

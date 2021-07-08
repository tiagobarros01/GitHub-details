import { Box, Flex, Text } from '@chakra-ui/react';
import { UserReposProps } from '../@types/UserReposProps';

export function Repository(repo: UserReposProps) {
  return (
    <Box
      marginBottom="2.5"
      backgroundColor="gray.700"
      padding="2"
      borderRadius="md"
    >
      <Text display="flex" color="purple.400">
        Name:
        <Text color="gray.200" marginLeft="2.5">
          {repo.name}
        </Text>
      </Text>
      <Text color="purple.400">
        Description:
        <Text color="gray.200" >
          {repo.description || 'No description'}
        </Text>
      </Text>
      <Text display="flex" color="purple.400">
        Languages:
        <Text color="gray.200" marginLeft="2.5">
          {repo.language}
        </Text>
      </Text>
      <Text display="flex" color="purple.400">
        Stars:
        <Text color="gray.200" marginLeft="2.5">
          {repo.stargazers_count}
        </Text>
      </Text>
    </Box>
  );
}

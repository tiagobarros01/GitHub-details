import { Box, Flex, Text } from '@chakra-ui/react'
import { UserReposProps } from "../@types/UserReposProps";

export function Repository(repo: UserReposProps) {
  return (
    <Box>
      <Text color="purple.400">{repo.name}</Text>
      <Text>{repo.description}</Text>
      <Text>{repo.language}</Text>
      <Text>{repo.stargazers_count}</Text>
    </Box>
  );
}

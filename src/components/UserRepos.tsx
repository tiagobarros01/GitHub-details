import { Flex } from '@chakra-ui/react';
import { useUser } from '../hooks/useUser';

export function UserRepos() {
  const { repos } = useUser();

  return (
    <Flex
      color="gray.100"
      flexDirection="column"
      height="300px"
      overflowY="scroll"
    >
      {repos}
    </Flex>
  );
}

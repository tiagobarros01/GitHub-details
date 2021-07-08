import { Center, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader';
import { UserDetails } from '../../components/UserDetails';
import { useUser } from '../../hooks/useUser';

export default function User() {
  const {
    query: { user },
  } = useRouter();
  const { isLoading, getUserData, repoVisible, repos } = useUser();

  useEffect(() => {
    getUserData(String(user));
  }, [getUserData, user]);

  return (
    <Center
      as="main"
      height="100vh"
      backgroundColor="gray.800"
      flexDirection="column"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserDetails />
          {repoVisible && (
            <Flex
            flexDirection="column"
            maxHeight="300px"
            maxWidth="40%"
            marginTop="5"
            overflowY="scroll"
            color="gray.100"
            borderRadius="md"
          >
            {repos}
          </Flex>
          )}
        </>
      )}
    </Center>
  );
}

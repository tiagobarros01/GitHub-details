import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { UserRepos } from '../../components/UserRepos';
import { UserDetails } from '../../components/UserDetails';
import { UserContext } from '../../contexts/UserContext';

export default function User() {
  const {
    query: { user },
  } = useRouter();
  const { isLoading, getUserData, repoVisible } = useContext(UserContext);

  useEffect(() => {
    getUserData(String(user));
  }, [getUserData, user]);

  return (
    <Flex
      as="main"
      height="100vh"
      backgroundColor="gray.800"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <UserDetails />
          {repoVisible && <UserRepos />}
        </>
      )}
    </Flex>
  );
}

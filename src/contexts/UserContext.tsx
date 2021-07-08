/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import dark from '../styles/themes/dark';
import { useToast } from '../utils/useToast';

type UserProviderProps = {
  children: React.ReactNode;
};

type UserProps = {
  avatar: string;
  name: string;
  userName: string;
  followers?: number;
  following?: number;
  id: number;
  location: string;
  repos: number;
};

type UserReposProps = {
  id: number;
  description: string;
  language: string;
  name: string;
  stargazers_count: number;
};

type UserContextData = {
  userData: UserProps;
  repos: UserReposProps;
  getUserData: (userName: string) => Promise<boolean | undefined>;
  getUserRepos: (userName: string) => Promise<void>;
  redirectToUserPage: () => void;
  isLoading: boolean;
  userNameRef: React.RefObject<HTMLInputElement>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [repos, setRepos] = useState<UserReposProps>({} as UserReposProps);
  const userNameRef = useRef<HTMLInputElement>(null);

  const redirectToUserPage = useCallback(() => {
    const value = userNameRef.current?.value;
    if (!value || value === '') {
      useToast({
        type: 'error',
        message: 'No empty field',
        color: dark.colors.gray[600],
        background: 'white',
        duration: 3000,
      });
      return route.push('/');
    }
    route.push(`/users/${value}`);
  }, [route]);

  const getUserData = useCallback(
    async (userName: string) => {
      setIsLoading(true);

      try {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        const status = res.status;

        if (status === 404) {
          setIsLoading(false);
          useToast({
            type: 'error',
            message: 'Invalid user name',
            color: dark.colors.gray[600],
            background: 'white',
            duration: 3000,
          });
          return route.push('/');
        }
        setUserData({
          avatar: data.avatar_url,
          id: data.id,
          location: data.location,
          name: data.name,
          repos: data.public_repos,
          userName: data.login,
          followers: data.followers,
          following: data.following,
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.debug(error);
      }
    },
    [route]
  );

  const getUserRepos = useCallback(async (userName: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const data = await response.json();

      setRepos(
        data.map((repo: UserReposProps) => {
          console.log(repo.stargazers_count);
          return (
            <div key={repo.id}>
              <p>{repo.name}</p>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
              <p>{repo.stargazers_count}</p>
            </div>
          );
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      userData,
      repos,
      getUserData,
      getUserRepos,
      redirectToUserPage,
      isLoading,
      userNameRef,
    }),
    [userData, repos, getUserData, getUserRepos, redirectToUserPage, isLoading]
  );

  return (
    <UserContext.Provider value={memoizedValue}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

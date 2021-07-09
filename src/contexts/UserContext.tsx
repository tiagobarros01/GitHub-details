/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { UserReposProps } from '../@types/UserReposProps';
import dark from '../styles/themes/dark';
import { useToast } from '../utils/useToast';
import { Repository } from '../components/Repository';

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

type UserContextData = {
  userData: UserProps;
  repos: UserReposProps | null;
  getUserData: (userName: string) => Promise<boolean | undefined>;
  getUserRepos: (userName: string) => Promise<void>;
  redirectToUserPage: () => void;
  isLoading: boolean;
  repoVisible: boolean;
  setRepoVisible: React.Dispatch<React.SetStateAction<boolean>>;
  userNameRef: React.RefObject<HTMLInputElement>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {
  const route = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repoVisible, setRepoVisible] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserProps>({} as UserProps);
  const [repos, setRepos] = useState<UserReposProps | null>(null);
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
    setRepos(null)
    setRepoVisible(false)
    route.push(`/users/${value}`);
  }, [route]);

  const getUserData = useCallback(
    async (userName: string) => {
      setIsLoading(true);
      setRepoVisible(false);

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
        setRepoVisible(false);
      } catch (error) {
        setIsLoading(false);
        console.debug(error);
      }
    },
    [route]
  );

  const getUserRepos = useCallback(async (userName: string) => {
    setRepoVisible(true);
    try {
      const response = await fetch(
        `https://api.github.com/users/${userName}/repos`
      );
      const data = await response.json();

      setRepos(
        data.map((repo: UserReposProps) => (
          <Repository
            key={repo.id}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            stargazers_count={repo.stargazers_count}
          />
        ))
      );
    } catch (error) {
      setRepoVisible(false);
      console.log(error);
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
      repoVisible,
      setRepoVisible,
      userNameRef,
    }),
    [
      userData,
      repos,
      getUserData,
      getUserRepos,
      redirectToUserPage,
      isLoading,
      repoVisible,
      setRepoVisible
    ]
  );

  return (
    <UserContext.Provider value={memoizedValue}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

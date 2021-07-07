/* eslint-disable react-hooks/rules-of-hooks */
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

type UserContextData = {
  user: UserProps;
  getUserData: () => Promise<void>;
  isLoading: boolean;
  userNameRef: React.RefObject<HTMLInputElement>;
};

const UserContext = createContext<UserContextData>({} as UserContextData);

function UserProvider({ children }: UserProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const userNameRef = useRef<HTMLInputElement>(null);

  const getUserData = useCallback(async () => {
    const value = userNameRef.current?.value;

    if (value === '') {
      useToast({
        type: 'error',
        message: 'No empty field',
        color: dark.colors.gray[600],
        background: 'white',
        duration: 3000,
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const res = await fetch(`https://api.github.com/users/${value}`);
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
        return;
      }
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.debug(error);
    }
  }, []);

  const memoizedValue = useMemo(() => {
    const value: UserContextData = {
      user,
      getUserData,
      isLoading,
      userNameRef,
    };
    return value;
  }, [user, getUserData, isLoading]);

  return (
    <UserContext.Provider value={memoizedValue}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

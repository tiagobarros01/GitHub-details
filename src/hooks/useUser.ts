import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export function useUser() {
  const ctx = useContext(UserContext);

  return ctx;
}

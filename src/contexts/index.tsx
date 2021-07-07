import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeContext';
import React from 'react';

type Props = {
  children: React.ReactNode;
}

export function ContextProvider({ children }: Props) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}

import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => (
  <ChakraProvider>
    <CSSReset />
    {children}
  </ChakraProvider>
);

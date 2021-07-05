import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import dark from '../styles/themes/dark';

type Props = {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => (
  <ChakraProvider theme={dark}>
    <CSSReset />
    {children}
  </ChakraProvider>
);

import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';

import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
}
export default MyApp;

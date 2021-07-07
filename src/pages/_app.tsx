import type { AppProps } from 'next/app';
import { ContextProvider } from '../contexts';

import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
      <Toaster />
    </ContextProvider>
  );
}
export default MyApp;

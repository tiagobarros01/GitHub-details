import type { AppProps } from 'next/app';
import { ContextProvider } from '../contexts';
import { BackTo } from '../components/BackTo';

import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <BackTo />
      <Component {...pageProps} />
      <Toaster />
    </ContextProvider>
  );
}
export default MyApp;

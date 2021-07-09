import type { AppProps } from 'next/app';
import { ContextProvider } from '../contexts';
import { BackTo } from '../components/BackTo';

import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <ContextProvider>
      {pathname !== '/' && <BackTo />}
      <Component {...pageProps} />
      <Toaster />
    </ContextProvider>
  );
}
export default MyApp;

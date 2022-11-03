import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';

const MockApi = dynamic(() => import('./mock-api'));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MockApi />
      <Component {...pageProps} />
    </>
  );
}

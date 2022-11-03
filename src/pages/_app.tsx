import '../styles/globals.css'
import type { AppProps } from 'next/app'
<<<<<<< HEAD

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
=======
import dynamic from 'next/dynamic';

const MockApi = dynamic(() => import('./mock-api'));

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <MockApi />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

>>>>>>> cb5ad813247e829416196c3edc5e622a0da1c458

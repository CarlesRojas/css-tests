import type { AppProps } from 'next/app';
import Head from 'next/head';
import globalStyles from '../styles/globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next app using Stitches CSS" />
        <meta name="theme-color" content="#000000" />

        <title>Stitches</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

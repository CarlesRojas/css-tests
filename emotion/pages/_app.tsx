import type { AppProps } from 'next/app';
import Head from 'next/head';
import globalStyles from '../styles/globalStyles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next app using Emotion CSS" />
        <meta name="theme-color" content="#000000" />

        <title>Emotion</title>
      </Head>

      {globalStyles}
      {theme}

      <Component {...pageProps} />
    </>
  );
}

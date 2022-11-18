import type { AppProps } from 'next/app';
import Head from 'next/head';
import './global.scss';
import './theme.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next app using CSS modules" />
        <meta name="theme-color" content="#000000" />

        <title>CSS Modules</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

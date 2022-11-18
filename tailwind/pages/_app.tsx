import type { AppProps } from 'next/app';
import Head from 'next/head';
import './global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next app using Tailwind CSS" />
        <meta name="theme-color" content="#000000" />

        <title>Tailwind</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

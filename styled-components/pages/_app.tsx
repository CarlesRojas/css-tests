import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from './globalStyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next app using Styled Components" />
        <meta name="theme-color" content="#000000" />

        <title>Styled Components</title>
      </Head>

      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </>
  );
}

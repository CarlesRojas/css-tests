import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stitches.config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="CSS Modules" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CSS Modules" />
        <meta name="description" content="CSS Modules" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

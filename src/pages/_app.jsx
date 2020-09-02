import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Head from 'next/head';
import content from '../content';

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{content.appTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

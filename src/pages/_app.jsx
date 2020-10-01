import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import content from '../content';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{content.appTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default MyApp;

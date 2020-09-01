import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import cx from 'classnames';
import content from '../content';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    const { bodyClass } = this.props;

    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="icon" href="/favicon.ico" />
          <title>{content.appTitle}</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={content.appDescription} />
          <meta name="author" content={content.appAuthor} />

          <meta property="og:title" content={content.appTitle} />
          <meta property="og:type" content={content.ogType} />
          <meta property="og:url" content={content.ogUrl} />
          <meta property="og:image" content={content.ogImage} />
          <meta property="og:description" content={content.ogDescription} />

          <link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
        </Head>
        <body id="page-top" className={cx(bodyClass, 'index')}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

import Head from "next/head"
import content from "../content";
import * as React from "react";
// import 'react-bootstrap/dist/react-bootstrap.min';
// import 'jquery/dist/jquery.slim';
// import 'popper.js/dist/popper.min';

// import dynamic from 'next/dynamic'
//
// const DynamicComponentWithNoSSR = dynamic(
//   () => import('react-bootstrap/dist/react-bootstrap.min'),
//   { ssr: false }
// )

class HeadElement extends React.Component {
    componentDidMount() {
        const { bodyClass } = this.props
        document.querySelector("body").classList.add(bodyClass || "index")
        document.querySelector("body").setAttribute('id', 'page-top')
    }

    render() {
        return <Head>
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

            {/*<DynamicComponentWithNoSSR />*/}
            {/* CSS only */}
            {/*<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />*/}

            {/* JS, Popper.js, and jQuery */}
            {/*<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"/>*/}
            {/*<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"/>*/}
            {/*<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous" />*/}

            {/* Custom CSS */}
            {/*<link href="/css/the-styles.min.css" rel="stylesheet" />*/}

            {/* Custom Fonts */}
            <link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Play:400,700" rel="stylesheet" type="text/css" />
            <link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic" rel="stylesheet" type="text/css" />

        </Head>
    }
}

export default HeadElement

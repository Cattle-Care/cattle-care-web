import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import 'tailwindcss/tailwind.css';
import SEO from '../../next-seo.config';

function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Cattle Care</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
      <DefaultSeo {...SEO} />
    </>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  // eslint-disable-next-line react/require-default-props
  userType: PropTypes.string,
};

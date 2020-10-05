import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";
import "../styles/index.scss";

NProgress.configure({ showSpinner: false, parent: "#__next" });
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

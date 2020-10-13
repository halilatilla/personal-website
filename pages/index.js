import React from "react";
import Head from "next/head";
import { Nav, Main, Footer } from "../components";
import SiteConfig from "../site.config";

const Home = () => {
  return (
    <>
      <Head>
        <title>{SiteConfig.title}</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

export default Home;

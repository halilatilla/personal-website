import React from "react";
import Head from "next/head";
import { Nav, Typist, Footer } from "../components";
import SiteConfig from "../site.config";

const Home = () => {
  return (
    <>
      <Head>
        <title>{SiteConfig.title}</title>
      </Head>
      <Nav />
      <Typist />
      <Footer />
    </>
  );
};

export default Home;

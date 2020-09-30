import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Halil Atilla</title>
      </Head>
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

export default Home;

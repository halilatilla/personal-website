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
      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Dank Mono", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #181a1b;
          color: wheat;
          text-align: center;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Home;

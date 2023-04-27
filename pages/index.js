import Head from "next/head";
import { Nav, Main } from "../components";
import SiteConfig from "../site.config";

const Home = () => {
  return (
    <>
      <Head>
        <title>{SiteConfig.title}</title>
      </Head>
      <Nav />
      <Main />
    </>
  );
};

export default Home;

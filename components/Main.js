import dynamic from "next/dynamic";

const TextParticles = dynamic(
  () => import("react-text-particles").then((mod) => mod.TextParticles),
  {
    ssr: false,
  }
);

const Main = () => {
  return (
    <main className="main" id="contentMain">
      <h1>
        <TextParticles />
      </h1>
      <p>
        U can creat that fancy stuff with my{" "}
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-text-particles"
        >
          react-text-particles{" "}
        </a>
        npm package 😎
      </p>
    </main>
  );
};

export default Main;

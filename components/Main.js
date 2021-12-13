import dynamic from "next/dynamic";

const TextParticles = dynamic(() => import("react-text-particles"), {
  ssr: false,
});

const Main = () => {
  return (
    <main className="main" id="contentMain">
      <h1>
        <TextParticles
          flow={0.3}
          text="Halil Atilla"
          textSize={160}
          canvas={{ width: 880, height: 300, bg: "#161c1e" }}
          colorSet={["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5"]}
        />
      </h1>
      <p>
        U can creat that fancy stuff with my{" "}
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-text-particles"
        >
          react-text-particles
        </a>
        npm package 😎
      </p>
    </main>
  );
};

export default Main;

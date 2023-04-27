import dynamic from "next/dynamic";

const TextParticles = dynamic(
  () => import("react-text-particles").then((mod) => mod.TextParticles),
  {
    ssr: false,
  }
);

const Main = () => {
  return (
    <>
      <main className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1>
              <TextParticles />
            </h1>
            <p className="py-6">
              You can create visually appealing designs with ease using my npm
              package.
            </p>
            <a
              target="_blank"
              className="link link-accent"
              href="https://www.npmjs.com/package/react-text-particles"
            >
              react-text-particles.
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;

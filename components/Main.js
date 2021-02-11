import React from "react";

const Main = () => {
  return (
    <main className="main" id="contentMain">
      <p className="main__hi">Hi 👋🏻</p>
      <h1>
        I' am
        <div className="video__wrapper">
          <video
            name="Halil Atilla"
            loop
            autoPlay={true}
            muted
            src="/logo.mp4"
            type="video/mp4"
          />
        </div>
      </h1>
      <span> Just A Curious </span>
      <span> Frontend Developer </span>
    </main>
  );
};

export default Main;

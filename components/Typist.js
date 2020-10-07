import React from "react";
import Typist from "react-typist";

const TypistContainer = () => {
  const hours = new Date().getHours();
  const isNoon = hours > 11 && hours < 18;
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23);

  let welcome = "Good Morning 🌞";
  if (isNoon) welcome = "Good Afternoon ☀️";
  else if (isEvening) welcome = "Good Evening 🧛🏿";

  return (
    <>
      <main className="typist-container" id="contentMain" tabIndex="-1">
        <Typist startDelay={2000} cursor={{ element: "▍" }}>
          Hi 👋🏻
          <br />
          <Typist.Delay ms={500} />
          {welcome}
          <br />
          <Typist.Delay ms={500} />
          <h1>
            I'm Halil Atilla 🧔🏻
            <br />
            <Typist.Delay ms={500} />
            <span> Just A Curious 🔍</span>
            <br />
            <Typist.Delay ms={500} />
            <span> Frontend Developer 💻</span>
          </h1>
          <br />
        </Typist>
      </main>
    </>
  );
};

export default TypistContainer;

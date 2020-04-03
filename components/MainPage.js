import React from "react";
import Typist from "react-typist";

const MainPage = () => {
  const hours = new Date().getHours();
  const isNoon = hours > 11 && hours < 18;
  const isEvening = (hours >= 0 && hours <= 4) || (hours >= 18 && hours <= 23);

  let welcome = "Good morning 🌞";
  if (isNoon) welcome = "Good afternoon ";
  else if (isEvening) welcome = "Good evening 🧛🏿";
  return (
    <>
      <div className="hero">
        <Typist startDelay={2000} cursor={{ element: "▍" }}>
          Hi 👋🏻
          <br />
          <Typist.Delay ms={500} />
          {welcome}
          <br />
          <Typist.Delay ms={500} />
          <b>
            I'm Halil Atilla 🧔🏻
            <br />
            <Typist.Delay ms={500} />
            <span> Just A Curious 🔍</span>
            <br />
            <Typist.Delay ms={500} />
            <span> Frontend Developer 💻</span>
          </b>
          <br />
        </Typist>
      </div>

      <style jsx>{`
        .hero {
          padding: 2rem;
          font-size: 6vw;
        }
        .margin {
          margin-top: 30px;
        }
        @media (max-width: 768px) {
          .hero {
            padding: 1rem;
            font-size: 7vw;
          }
        }
      `}</style>
      <style global jsx>{`
        .Cursor {
          display: inline-block;
          margin-left: 5px;
          opacity: 1;
          animation: blink 1s linear infinite;
        }
        @keyframes blink {
          to {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default MainPage;

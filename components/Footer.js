import React from "react";

const Footer = () => (
  <footer>
    <a href="mailto:atillahalil0@gmail.com">atillahalil0@gmail.com</a>
    <style jsx>{`
      footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        background-color: rgb(66, 66, 66);
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      a {
        color: white;
        padding: 6px;
        border-radius: 3px;
        transition: all 0.3s;
      }
      a:hover {
        background-color: wheat;
        color: #4f5458;
      }
    `}</style>
  </footer>
);

export default Footer;

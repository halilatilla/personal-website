import React from "react";

const links = [
  { href: "https://twitter.com/HalilAtilla10", label: "Twitter" },
  { href: "https://github.com/halilatilla", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/halil-atilla-838129151/",
    label: "Linkedin"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a className="social-links" href={href} target="_blank">
            {label}
          </a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Dank Mono", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #181a1b;
      }
      nav {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #4f5458;
      }

      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 16px;
      }
      li {
        display: flex;
      }
      .social-links {
        color: #067df7;
        text-decoration: none;
        font-size: 1rem;
        transition: all 0.3s ease;
        padding: 6px;
        border-radius: 3px;
      }
      .social-links:hover {
        background-color: #067df7;
        color: white;
      }
    `}</style>
  </nav>
);

export default Nav;

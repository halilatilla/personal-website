import React, { useState } from "react";
import Link from "next/link";

const links = [
  { href: "https://twitter.com/HalilAtilla10", label: "Twitter" },
  { href: "https://github.com/halilatilla", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/halil-atilla-838129151/",
    label: "Linkedin",
  },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = ({ goHome }) => {
  const [loading, setLoading] = useState(false);

  return (
    <nav>
      <a className="skip-to-content-link" href="#contentMain">
        Skip to content
      </a>
      {goHome ? (
        <Link href="/">
          <a className="social-links"> {goHome} </a>
        </Link>
      ) : (
        <Link href="/movies">
          {loading ? (
            <a className="social-links">Loading... </a>
          ) : (
            <a className="social-links" onClick={() => setLoading(true)}>
              My Movies 🎬
            </a>
          )}
        </Link>
      )}
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a
              className="social-links"
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <style jsx>{`
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
        li {
          display: flex;
        }
        .social-links {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s ease;
          padding: 6px;
          border-radius: 3px;
        }
        .social-links:hover {
          background-color: wheat;
          color: #4f5458;
        }

        .skip-to-content-link {
          background: wheat;
          color: #4f5458;
          left: 18px;
          padding: 6px;
          border-radius: 3px;
          position: absolute;
          transform: translateY(-200%);
          opacity: 0;
          transition: transform 0.3s;
        }

        .skip-to-content-link:focus {
          transform: translateY(0%);
          opacity: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Nav;

import React, { useState } from "react";
import Link from "next/link";

const SocialLinks = [
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
    <nav className="nav-container">
      <a className="skip-to-content-link" href="#contentMain">
        Skip to content
      </a>
      {goHome && (
        <Link href="/">
          <a className="link"> {goHome} </a>
        </Link>
      )}
   
      <ul className="social-links-container">
        {SocialLinks.map(({ key, href, label }) => (
          <li className="social-links-item" key={key}>
            <a className="link" href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
